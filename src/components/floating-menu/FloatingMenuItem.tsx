import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface FloatingMenuItemProps {
  title: string;
  icon: React.ReactNode;
  onSelect: () => void;
}

const FloatingMenuItem: React.FC<FloatingMenuItemProps> = ({ title, icon, onSelect }) => {
  const { isDarkMode } = useTheme();

  return (
    <button
      onClick={onSelect}
      className={`
        flex items-center space-x-3 w-full p-3 rounded-lg
        transition-colors duration-200
        ${isDarkMode 
          ? 'hover:bg-gray-700 text-gray-200' 
          : 'hover:bg-gray-100 text-gray-800'
        }
      `}
    >
      <span className={`
        ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}
      `}>
        {icon}
      </span>
      <span className="text-sm font-medium">{title}</span>
    </button>
  );
};

export default FloatingMenuItem;