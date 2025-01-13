import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { BookOpen, Clock, Award, Trophy } from 'lucide-react';

const LearningProgress = () => {
  const { isDarkMode } = useTheme();

  const stats = [
    { label: 'Courses Completed', value: '4', icon: <BookOpen className="h-5 w-5 text-emerald-500" /> },
    { label: 'Hours Learned', value: '32', icon: <Clock className="h-5 w-5 text-blue-500" /> },
    { label: 'Certificates', value: '2', icon: <Award className="h-5 w-5 text-purple-500" /> },
    { label: 'Achievement Points', value: '850', icon: <Trophy className="h-5 w-5 text-gold" /> }
  ];

  return (
    <div className={`p-6 rounded-2xl ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    } border border-gray-200 dark:border-gray-700`}>
      <h2 className={`text-lg font-bold mb-6 ${
        isDarkMode ? 'text-white' : 'text-gray-900'
      }`}>
        Learning Progress
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

      <div className="mt-6">
        <div className="flex items-center justify-between mb-2">
          <span className={`text-sm ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Monthly Learning Goal
          </span>
          <span className={`text-sm font-medium ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            65%
          </span>
        </div>
        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gold rounded-full transition-all duration-500"
            style={{ width: '65%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default LearningProgress;