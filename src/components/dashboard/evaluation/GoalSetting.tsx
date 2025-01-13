import React, { useState } from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { Cross, Users, Coins, Heart, Star, Plus, Save, Target } from 'lucide-react';
import toast from 'react-hot-toast';

interface Goal {
  id: string;
  pillar: string;
  title: string;
  description: string;
  target: string;
  deadline: string;
  progress: number;
  status: 'not_started' | 'in_progress' | 'completed';
}

const GoalSetting = () => {
  const { isDarkMode } = useTheme();
  const [goals, setGoals] = useState<Goal[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [newGoal, setNewGoal] = useState<Partial<Goal>>({});

  const pillars = [
    { id: 'faith', name: 'Faith', icon: <Cross className="h-5 w-5 text-purple-500" /> },
    { id: 'family', name: 'Family', icon: <Users className="h-5 w-5 text-blue-500" /> },
    { id: 'finance', name: 'Finance', icon: <Coins className="h-5 w-5 text-gold" /> },
    { id: 'fitness', name: 'Fitness', icon: <Heart className="h-5 w-5 text-red-500" /> },
    { id: 'freedom', name: 'Freedom', icon: <Star className="h-5 w-5 text-emerald-500" /> }
  ];

  const handleSaveGoal = () => {
    if (!newGoal.title || !newGoal.pillar || !newGoal.deadline) {
      toast.error('Please fill in all required fields');
      return;
    }

    const goal: Goal = {
      id: Date.now().toString(),
      title: newGoal.title,
      pillar: newGoal.pillar,
      description: newGoal.description || '',
      target: newGoal.target || '',
      deadline: newGoal.deadline,
      progress: 0,
      status: 'not_started'
    };

    setGoals(prev => [...prev, goal]);
    setNewGoal({});
    setShowForm(false);
    toast.success('Goal added successfully');
  };

  const getStatusColor = (status: Goal['status']) => {
    switch (status) {
      case 'completed': return 'text-emerald-500 bg-emerald-500/10';
      case 'in_progress': return 'text-gold bg-gold/10';
      default: return 'text-gray-400 bg-gray-400/10';
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className={`text-3xl font-bold mb-4 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Goal Setting
        </h2>
        <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Set and track your goals for each life pillar
        </p>
      </div>

      {/* Goals List */}
      <div className="space-y-6 mb-8">
        {goals.map((goal) => (
          <div
            key={goal.id}
            className={`p-6 rounded-xl ${
              isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
            } hover:border-gold/50 transition-all border border-transparent`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                {pillars.find(p => p.id === goal.pillar)?.icon}
                <div>
                  <h3 className={`font-bold ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {goal.title}
                  </h3>
                  <p className={`text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {goal.description}
                  </p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                getStatusColor(goal.status)
              }`}>
                {goal.status.split('_').map(word => 
                  word.charAt(0).toUpperCase() + word.slice(1)
                ).join(' ')}
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                    Progress
                  </span>
                  <span className={`font-medium ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {goal.progress}%
                  </span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gold rounded-full transition-all duration-500"
                    style={{ width: `${goal.progress}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                  Target: {goal.target}
                </span>
                <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                  Deadline: {new Date(goal.deadline).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Goal Button/Form */}
      {showForm ? (
        <div className={`p-6 rounded-xl ${
          isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
        } mb-8`}>
          <h3 className={`text-xl font-bold mb-6 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Add New Goal
          </h3>

          <div className="space-y-6">
            <div>
              <label className={`block mb-2 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Select Pillar
              </label>
              <select
                value={newGoal.pillar || ''}
                onChange={(e) => setNewGoal(prev => ({ ...prev, pillar: e.target.value }))}
                className={`w-full p-3 rounded-lg ${
                  isDarkMode
                    ? 'bg-gray-600 text-white border-gray-500'
                    : 'bg-white text-gray-900 border-gray-300'
                } border focus:ring-2 focus:ring-gold`}
              >
                <option value="">Select a pillar</option>
                {pillars.map(pillar => (
                  <option key={pillar.id} value={pillar.id}>
                    {pillar.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className={`block mb-2 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Goal Title
              </label>
              <input
                type="text"
                value={newGoal.title || ''}
                onChange={(e) => setNewGoal(prev => ({ ...prev, title: e.target.value }))}
                className={`w-full p-3 rounded-lg ${
                  isDarkMode
                    ? 'bg-gray-600 text-white border-gray-500'
                    : 'bg-white text-gray-900 border-gray-300'
                } border focus:ring-2 focus:ring-gold`}
                placeholder="Enter goal title"
              />
            </div>

            <div>
              <label className={`block mb-2 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Description
              </label>
              <textarea
                value={newGoal.description || ''}
                onChange={(e) => setNewGoal(prev => ({ ...prev, description: e.target.value }))}
                className={`w-full p-3 rounded-lg ${
                  isDarkMode
                    ? 'bg-gray-600 text-white border-gray-500'
                    : 'bg-white text-gray-900 border-gray-300'
                } border focus:ring-2 focus:ring-gold`}
                rows={3}
                placeholder="Describe your goal"
              />
            </div>

            <div>
              <label className={`block mb-2 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Target
              </label>
              <input
                type="text"
                value={newGoal.target || ''}
                onChange={(e) => setNewGoal(prev => ({ ...prev, target: e.target.value }))}
                className={`w-full p-3 rounded-lg ${
                  isDarkMode
                    ? 'bg-gray-600 text-white border-gray-500'
                    : 'bg-white text-gray-900 border-gray-300'
                } border focus:ring-2 focus:ring-gold`}
                placeholder="Set a measurable target"
              />
            </div>

            <div>
              <label className={`block mb-2 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Deadline
              </label>
              <input
                type="date"
                value={newGoal.deadline || ''}
                onChange={(e) => setNewGoal(prev => ({ ...prev, deadline: e.target.value }))}
                className={`w-full p-3 rounded-lg ${
                  isDarkMode
                    ? 'bg-gray-600 text-white border-gray-500'
                    : 'bg-white text-gray-900 border-gray-300'
                } border focus:ring-2 focus:ring-gold`}
              />
            </div>

            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowForm(false)}
                className="px-6 py-3 text-gray-400 hover:text-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveGoal}
                className="flex items-center space-x-2 px-6 py-3 bg-gold hover:bg-gold-light text-royal-dark rounded-lg transition-colors"
              >
                <Save className="h-5 w-5" />
                <span>Save Goal</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setShowForm(true)}
          className="w-full flex items-center justify-center space-x-2 p-6 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-gold transition-colors"
        >
          <Plus className="h-5 w-5" />
          <span>Add New Goal</span>
        </button>
      )}
    </div>
  );
};

export default GoalSetting;