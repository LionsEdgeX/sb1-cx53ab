import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { Users, Database, Server, Clock } from 'lucide-react';

const metrics = [
  {
    label: 'Active Users',
    value: '2,845',
    change: '+12.5%',
    isPositive: true,
    icon: <Users className="h-6 w-6" />
  },
  {
    label: 'Database Size',
    value: '45.2 GB',
    change: '+2.3%',
    isPositive: false,
    icon: <Database className="h-6 w-6" />
  },
  {
    label: 'Server Load',
    value: '42%',
    change: '-5%',
    isPositive: true,
    icon: <Server className="h-6 w-6" />
  },
  {
    label: 'Response Time',
    value: '124ms',
    change: '-12ms',
    isPositive: true,
    icon: <Clock className="h-6 w-6" />
  }
];

const SystemMetrics = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
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
              {metric.icon}
            </div>
            <div className={`flex items-center ${
              metric.isPositive ? 'text-emerald-500' : 'text-red-500'
            }`}>
              <span className="text-sm font-medium">{metric.change}</span>
            </div>
          </div>
          <h3 className={`text-2xl font-bold mb-1 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {metric.value}
          </h3>
          <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
            {metric.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SystemMetrics;