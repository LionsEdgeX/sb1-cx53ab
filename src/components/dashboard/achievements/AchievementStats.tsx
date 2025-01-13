import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { Trophy, Star, Target, Award } from 'lucide-react';

const AchievementStats = () => {
  const { isDarkMode } = useTheme();

  const stats = [
    { label: 'Total Achievements', value: '24', icon: <Trophy className="h-5 w-5 text-gold" /> },
    { label: 'Current Streak', value: '7', icon: <Star className="h-5 w-5 text-purple-500" /> },
    { label: 'Completion Rate', value: '78%', icon: <Target className="h-5 w-5 text-emerald-500" /> },
    { label: 'Rank', value: 'Elite', icon: <Award className="h-5 w-5 text-blue-500" /> }
  ];

  return (
    <div className={`p-6 rounded-2xl ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    } border border-gray-200 dark:border-gray-700`}>
      <h2 className={`text-lg font-bold mb-6 ${
        isDarkMode ? 'text-white' : 'text-gray-900'
      }`}>
        Achievement Stats
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className={`p-4 rounded-xl ${
            isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
          }`}>
            <div className="flex items-center space-x-3 mb-2">
              <div className={`p-2 rounded-lg ${
                isDarkMode ? 'bg-gray-600' : 'bg-white'
              }`}>
                {stat.icon}
              </div>
            </div>
            <div className={`text-2xl font-bold mb-1 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {stat.value}
            </div>
            <div className={`text-sm ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementStats;