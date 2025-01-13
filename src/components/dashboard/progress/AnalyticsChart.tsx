import React, { useEffect, useRef } from 'react';
import { createChart, ColorType } from 'lightweight-charts';
import { useTheme } from '../../../contexts/ThemeContext';

const AnalyticsChart = () => {
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

      const candlestickSeries = chart.addCandlestickSeries({
        upColor: '#10B981',
        downColor: '#EF4444',
        borderVisible: false,
        wickUpColor: '#10B981',
        wickDownColor: '#EF4444',
      });

      // Sample data
      const data = [
        { time: '2024-01-01', open: 100, high: 105, low: 98, close: 103 },
        { time: '2024-01-02', open: 103, high: 107, low: 100, close: 105 },
        { time: '2024-01-03', open: 105, high: 110, low: 101, close: 109 },
        { time: '2024-01-04', open: 109, high: 112, low: 107, close: 110 },
        { time: '2024-01-05', open: 110, high: 115, low: 108, close: 113 },
      ];

      candlestickSeries.setData(data);
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

  return <div ref={chartContainerRef} />;
};

export default AnalyticsChart;