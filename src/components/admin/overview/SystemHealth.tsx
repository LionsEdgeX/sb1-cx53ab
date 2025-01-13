import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { createChart, ColorType } from 'lightweight-charts';

const SystemHealth = () => {
  const { isDarkMode } = useTheme();
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<any>(null);

  useEffect(() => {
    if (chartContainerRef.current) {
      const chart = createChart(chartContainerRef.current, {
        layout: {
          background: { type: ColorType.Solid, color: 'transparent' },
          textColor: isDarkMode ? '#9CA3AF' : '#4B5563',
        },
        grid: {
          vertLines: { color: isDarkMode ? '#374151' : '#E5E7EB' },
          horzLines: { color: isDarkMode ? '#374151' : '#E5E7EB' },
        },
        width: chartContainerRef.current.clientWidth,
        height: 400,
      });

      const cpuSeries = chart.addAreaSeries({
        lineColor: '#10B981',
        topColor: 'rgba(16, 185, 129, 0.3)',
        bottomColor: 'rgba(16, 185, 129, 0)',
        lineWidth: 2,
      });

      const memorySeries = chart.addAreaSeries({
        lineColor: '#3B82F6',
        topColor: 'rgba(59, 130, 246, 0.3)',
        bottomColor: 'rgba(59, 130, 246, 0)',
        lineWidth: 2,
      });

      // Sample data
      const data = Array.from({ length: 7 }, (_, i) => ({
        time: new Date(Date.now() - (6 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        value: Math.random() * 30 + 20
      }));

      const memoryData = Array.from({ length: 7 }, (_, i) => ({
        time: new Date(Date.now() - (6 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        value: Math.random() * 40 + 30
      }));

      cpuSeries.setData(data);
      memorySeries.setData(memoryData);
      chartRef.current = chart;

      const handleResize = () => {
        if (chartContainerRef.current && chartRef.current) {
          chartRef.current.applyOptions({
            width: chartContainerRef.current.clientWidth,
          });
        }
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        if (chartRef.current) {
          chartRef.current.remove();
        }
      };
    }
  }, [isDarkMode]);

  return (
    <div className={`p-6 rounded-xl ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    } border border-gray-200 dark:border-gray-700`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className={`text-lg font-bold ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          System Health
        </h2>
        <select className={`px-3 py-1 rounded-lg text-sm ${
          isDarkMode 
            ? 'bg-gray-700 text-white border-gray-600' 
            : 'bg-gray-100 text-gray-900 border-gray-200'
        } border`}>
          <option>Last 24 hours</option>
          <option>Last 7 days</option>
          <option>Last 30 days</option>
        </select>
      </div>

      <div ref={chartContainerRef} />

      <div className="flex items-center justify-center space-x-8 mt-4">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-emerald-500 rounded-full mr-2" />
          <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
            CPU Usage
          </span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-blue-500 rounded-full mr-2" />
          <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
            Memory Usage
          </span>
        </div>
      </div>
    </div>
  );
};

export default SystemHealth;