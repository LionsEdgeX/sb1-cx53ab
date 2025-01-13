import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { Flame, Calendar, Trophy } from 'lucide-react';

const StreakTracker = () => {
  const { isDarkMode } = useTheme();
  const currentStreak = 7;
  const bestStreak = 21;

  return (
    <div className={`p-6 rounded-2xl ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    } border border-gray-200 dark:border-gray-700`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className={`text-lg font-bold ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Streak Tracker
        </h2>
        <div className="flex items-center space-x-2 px-3 py-1 bg-gold/20 rounded-lg">
          <Trophy className="h-4 w-4 text-gold" />
          <span className="text-gold font-medium">Level 3</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className={`p-4 rounded-xl ${
          isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
        }`}>
          <div className="flex items-center space-x-3 mb-2">
            <Flame className="h-5 w-5 text-orange-500" />
            <span className={`font-medium ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>Current Streak</span>
          </div>
          <div className="text-3xl font-bold text-gold">{currentStreak} days</div>
        </div>

        <div className={`p-4 rounded-xl ${
          isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
        }`}>
          <div className="flex items-center space-x-3 mb-2">
            <Trophy className="h-5 w-5 text-gold" />
            <span className={`font-medium ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>Best Streak</span>
          </div>
          <div className="text-3xl font-bold text-gold">{bestStreak} days</div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between text-sm">
          <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
            Next Milestone
          </span>
          <span className={`font-medium ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            10 days
          </span>
        </div>
        <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gold rounded-full transition-all duration-500"
            style={{ width: '70%' }}
          />
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-gold" />
            <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
              Started on Jan 15, 2024
            </span>
          </div>
          <span className="text-gold font-medium">
            3 days to milestone
          </span>
        </div>
      </div>
    </div>
  );
};

export default StreakTracker;