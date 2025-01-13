import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface ResourceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ icon, title, description }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`p-6 rounded-xl ${
      isDarkMode 
        ? 'bg-gray-700 hover:bg-gray-600' 
        : 'bg-white hover:bg-gray-50'
    } transition-all duration-300 shadow-lg hover:shadow-xl`}>
      <div className="text-blue-500 mb-4">{icon}</div>
      <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h3>
      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        {description}
      </p>
    </div>
  );
};

export default ResourceCard;