/*
  # Dashboard Schema Setup

  1. New Tables
    - `profiles`
      - User profile information
      - Linked to auth.users
      - Stores personal details and preferences
    
    - `progress_tracks`
      - Tracks user progress across different areas
      - Stores metrics and achievements
    
    - `goals`
      - User-defined goals and targets
      - Links to progress tracking
    
    - `achievements`
      - User achievements and badges
      - Milestone tracking

  2. Security
    - Enable RLS on all tables
    - Policies for user data access
    - Protected fields and relationships

  3. Changes
    - Initial schema creation
    - Basic security policies
*/

-- Profiles Table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username text UNIQUE,
  full_name text,
  avatar_url text,
  bio text,
  trading_experience text,
  risk_tolerance text,
  preferred_markets text[],
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Progress Tracks Table
CREATE TABLE IF NOT EXISTS progress_tracks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  category text NOT NULL,
  metric_name text NOT NULL,
  metric_value numeric NOT NULL,
  recorded_at timestamptz DEFAULT now(),
  notes text,
  UNIQUE(user_id, category, metric_name, recorded_at)
);

-- Goals Table
CREATE TABLE IF NOT EXISTS goals (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text,
  category text NOT NULL,
  target_value numeric,
  current_value numeric DEFAULT 0,
  start_date timestamptz DEFAULT now(),
  target_date timestamptz,
  status text DEFAULT 'in_progress',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Achievements Table
CREATE TABLE IF NOT EXISTS achievements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text,
  badge_icon text,
  category text NOT NULL,
  achieved_at timestamptz DEFAULT now(),
  points integer DEFAULT 0
);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE progress_tracks ENABLE ROW LEVEL SECURITY;
ALTER TABLE goals ENABLE ROW LEVEL SECURITY;
ALTER TABLE achievements ENABLE ROW LEVEL SECURITY;

-- Profiles Policies
CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

-- Progress Tracks Policies
CREATE POLICY "Users can view own progress"
  ON progress_tracks FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own progress"
  ON progress_tracks FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Goals Policies
CREATE POLICY "Users can view own goals"
  ON goals FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can manage own goals"
  ON goals FOR ALL
  TO authenticated
  USING (auth.uid() = user_id);

-- Achievements Policies
CREATE POLICY "Users can view own achievements"
  ON achievements FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "System can manage achievements"
  ON achievements FOR ALL
  TO authenticated
  USING (auth.uid() = user_id);

-- Triggers for updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW
  EXECUTE PROCEDURE update_updated_at_column();

CREATE TRIGGER update_goals_updated_at
  BEFORE UPDATE ON goals
  FOR EACH ROW
  EXECUTE PROCEDURE update_updated_at_column();