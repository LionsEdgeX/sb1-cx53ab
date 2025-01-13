import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import PerformanceMetrics from './PerformanceMetrics';
import TradeHistory from './TradeHistory';
import AnalyticsChart from './AnalyticsChart';

const ProgressSection = () => {
  const { isDarkMode } = useTheme();

  const metrics = [
    {
      label: 'Total Trades',
      value: '156',
      change: '+12%',
      isPositive: true
    },
    {
      label: 'Win Rate',
      value: '68%',
      change: '+5%',
      isPositive: true
    },
    {
      label: 'Avg. Profit',
      value: '$425',
      change: '-2%',
      isPositive: false
    },
    {
      label: 'Risk/Reward',
      value: '1:2.5',
      change: '+0.3',
      isPositive: true
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className={`p-6 rounded-2xl ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      } border border-gray-200 dark:border-gray-700`}>
        <div className="flex items-center justify-between">
          <div>
            <h1 className={`text-2xl font-bold mb-2 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Trading Progress
            </h1>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Track your performance and analyze your trading patterns
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <select className={`px-4 py-2 rounded-lg text-sm ${
              isDarkMode 
                ? 'bg-gray-700 text-white border-gray-600' 
                : 'bg-gray-100 text-gray-900 border-gray-200'
            } border`}>
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
              <option>This year</option>
            </select>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <PerformanceMetrics metrics={metrics} />

      {/* Analytics Chart */}
      <div className={`p-6 rounded-2xl ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      } border border-gray-200 dark:border-gray-700`}>
        <div className="flex items-center justify-between mb-6">
          <h2 className={`text-lg font-bold ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Performance Analytics
          </h2>
          <div className="flex items-center space-x-4">
            <button className={`px-3 py-1 rounded-lg text-sm ${
              isDarkMode 
                ? 'bg-gray-700 text-white' 
                : 'bg-gray-100 text-gray-900'
            }`}>
              Win Rate
            </button>
            <button className={`px-3 py-1 rounded-lg text-sm ${
              isDarkMode 
                ? 'bg-gray-700 text-white' 
                : 'bg-gray-100 text-gray-900'
            }`}>
              Profit/Loss
            </button>
          </div>
        </div>
        <AnalyticsChart />
      </div>

      {/* Trade History */}
      <TradeHistory />
    </div>
  );
};

export default ProgressSection;