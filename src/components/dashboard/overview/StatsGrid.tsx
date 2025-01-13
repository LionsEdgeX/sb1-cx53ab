import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface Stat {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
}

interface StatsGridProps {
  stats: Stat[];
}

const StatsGrid: React.FC<StatsGridProps> = ({ stats }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`p-6 rounded-2xl ${
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
              {stat.isPositive ? (
                <ArrowUpRight className="h-4 w-4 mr-1" />
              ) : (
                <ArrowDownRight className="h-4 w-4 mr-1" />
              )}
              <span className="text-sm font-medium">{stat.change}</span>
            </div>
          </div>
          <h3 className={`text-2xl font-bold mb-1 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {stat.value}
          </h3>
          <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
            {stat.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;