import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { Trophy } from 'lucide-react';

const GoalProgress = () => {
  const { isDarkMode } = useTheme();

  const stats = [
    { label: 'Total Goals', value: '12' },
    { label: 'Completed', value: '5' },
    { label: 'In Progress', value: '7' },
    { label: 'Success Rate', value: '83%' }
  ];

  return (
    <div className={`p-6 rounded-2xl ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    } border border-gray-200 dark:border-gray-700`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className={`text-lg font-bold ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Overall Progress
        </h2>
        <div className="p-2 bg-gold/20 rounded-lg">
          <Trophy className="h-5 w-5 text-gold" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className={`p-4 rounded-xl ${
            isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
          }`}>
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

      <div className="mt-6">
        <div className="flex items-center justify-between mb-2">
          <span className={`text-sm ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Monthly Target
          </span>
          <span className={`text-sm font-medium ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            75%
          </span>
        </div>
        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gold rounded-full transition-all duration-500"
            style={{ width: '75%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default GoalProgress;