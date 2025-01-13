import React, { useEffect, useRef } from 'react';
import { createChart, ColorType } from 'lightweight-charts';
import { useTheme } from '../../../contexts/ThemeContext';

const ProgressChart = () => {
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
        height: 300,
      });

      const areaSeries = chart.addAreaSeries({
        lineColor: '#FFD700',
        topColor: 'rgba(255, 215, 0, 0.3)',
        bottomColor: 'rgba(255, 215, 0, 0)',
        lineWidth: 2,
      });

      // Sample data
      const data = [
        { time: '2024-01-01', value: 25 },
        { time: '2024-01-02', value: 28 },
        { time: '2024-01-03', value: 35 },
        { time: '2024-01-04', value: 32 },
        { time: '2024-01-05', value: 38 },
        { time: '2024-01-06', value: 45 },
        { time: '2024-01-07', value: 42 },
      ];

      areaSeries.setData(data);
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

export default ProgressChart;