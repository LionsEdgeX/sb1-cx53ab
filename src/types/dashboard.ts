export interface Profile {
  id: string;
  username: string | null;
  full_name: string | null;
  avatar_url: string | null;
  bio: string | null;
  trading_experience: string | null;
  risk_tolerance: string | null;
  preferred_markets: string[] | null;
  created_at: string;
  updated_at: string;
}

export interface ProgressTrack {
  id: string;
  user_id: string;
  category: string;
  metric_name: string;
  metric_value: number;
  recorded_at: string;
  notes: string | null;
}

export interface Goal {
  id: string;
  user_id: string;
  title: string;
  description: string | null;
  category: string;
  target_value: number;
  current_value: number;
  start_date: string;
  target_date: string | null;
  status: 'in_progress' | 'completed' | 'cancelled';
  created_at: string;
  updated_at: string;
}

export interface Achievement {
  id: string;
  user_id: string;
  title: string;
  description: string | null;
  badge_icon: string | null;
  category: string;
  achieved_at: string;
  points: number;
}

export type DashboardTab = 'overview' | 'progress' | 'goals' | 'achievements' | 'courses' | 'community' | 'evaluation';