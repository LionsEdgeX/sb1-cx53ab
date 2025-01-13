import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface StrategyCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const StrategyCard: React.FC<StrategyCardProps> = ({ icon, title, description }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`p-8 rounded-2xl transition-all duration-300 ${
      isDarkMode 
        ? 'bg-gray-800 hover:bg-gray-700' 
        : 'bg-white hover:bg-gray-50'
    } shadow-lg hover:shadow-xl transform hover:-translate-y-1`}>
      <div className="text-blue-500 mb-4">{icon}</div>
      <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h3>
      <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        {description}
      </p>
    </div>
  );
};

export default StrategyCard;