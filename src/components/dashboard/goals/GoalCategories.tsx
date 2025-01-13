import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { TrendingUp, Target, BookOpen, Users, BarChart2 } from 'lucide-react';

const categories = [
  {
    name: 'Performance',
    count: 4,
    icon: <TrendingUp className="h-5 w-5 text-emerald-500" />,
    color: 'emerald'
  },
  {
    name: 'Education',
    count: 3,
    icon: <BookOpen className="h-5 w-5 text-blue-500" />,
    color: 'blue'
  },
  {
    name: 'Risk Management',
    count: 2,
    icon: <Target className="h-5 w-5 text-purple-500" />,
    color: 'purple'
  },
  {
    name: 'Community',
    count: 2,
    icon: <Users className="h-5 w-5 text-gold" />,
    color: 'gold'
  },
  {
    name: 'Strategy',
    count: 1,
    icon: <BarChart2 className="h-5 w-5 text-red-500" />,
    color: 'red'
  }
];

const GoalCategories = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`p-6 rounded-2xl ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    } border border-gray-200 dark:border-gray-700`}>
      <h2 className={`text-lg font-bold mb-6 ${
        isDarkMode ? 'text-white' : 'text-gray-900'
      }`}>
        Categories
      </h2>

      <div className="space-y-4">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`w-full flex items-center justify-between p-3 rounded-xl ${
              isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
            } transition-colors`}
          >
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg ${
                isDarkMode ? 'bg-gray-600' : 'bg-white'
              }`}>
                {category.icon}
              </div>
              <span className={`font-medium ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {category.name}
              </span>
            </div>
            <span className={`text-sm ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {category.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default GoalCategories;