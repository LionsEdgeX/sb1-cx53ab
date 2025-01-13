import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { FileText, BookOpen, Video, Book } from 'lucide-react';

const stats = [
  {
    label: 'Total Content',
    value: '458',
    change: '+12.5%',
    isPositive: true,
    icon: <FileText className="h-6 w-6" />
  },
  {
    label: 'Articles',
    value: '245',
    change: '+8.2%',
    isPositive: true,
    icon: <BookOpen className="h-6 w-6" />
  },
  {
    label: 'Videos',
    value: '156',
    change: '+15.3%',
    isPositive: true,
    icon: <Video className="h-6 w-6" />
  },
  {
    label: 'E-Books',
    value: '57',
    change: '+5.7%',
    isPositive: true,
    icon: <Book className="h-6 w-6" />
  }
];

const ContentStats = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`p-6 rounded-xl ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          } border border-gray-200 dark:border-gray-700`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`p-2 rounded-lg ${
              isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
            }`}>
              {stat.icon}
            </div>
            <div className={`flex items-center ${
              stat.isPositive ? 'text-emerald-500' : 'text-red-500'
            }`}>
              <span className="text-sm font-medium">{stat.change}</span>
            </div>
          </div>
          <h3 className={`text-2xl font-bold mb-1 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {stat.value}
          </h3>
          <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ContentStats;