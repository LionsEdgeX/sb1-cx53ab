import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface Metric {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
}

interface PerformanceMetricsProps {
  metrics: Metric[];
}

const PerformanceMetrics: React.FC<PerformanceMetricsProps> = ({ metrics }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className={`p-6 rounded-2xl ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          } border border-gray-200 dark:border-gray-700`}
        >
          <div className="flex items-center justify-between mb-4">
            <span className={`text-sm ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {metric.label}
            </span>
            <div className={`flex items-center ${
              metric.isPositive ? 'text-emerald-500' : 'text-red-500'
            }`}>
              {metric.isPositive ? (
                <ArrowUpRight className="h-4 w-4 mr-1" />
              ) : (
                <ArrowDownRight className="h-4 w-4 mr-1" />
              )}
              <span className="text-sm">{metric.change}</span>
            </div>
          </div>
          <div className={`text-2xl font-bold ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {metric.value}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PerformanceMetrics;