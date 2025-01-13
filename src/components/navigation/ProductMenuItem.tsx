import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';

interface ProductMenuItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  path?: string;
}

const ProductMenuItem: React.FC<ProductMenuItemProps> = ({ title, description, icon, image, path }) => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (path) {
      if (title === "Market Samurai Trading School") {
        navigate(path);
        // Trigger LAB mode switch after a short delay to ensure form is mounted
        setTimeout(() => {
          const loginForm = document.querySelector('form');
          if (loginForm) {
            const modeToggle = loginForm.querySelector('button[type="button"]');
            if (modeToggle) {
              modeToggle.click();
            }
          }
        }, 100);
      } else {
        navigate(path);
      }
    }
  };
  
  return (
    <a 
      href="#" 
      onClick={handleClick}
      className={`group flex items-start space-x-4 p-4 rounded-lg transition-colors ${
        isDarkMode 
          ? 'hover:bg-gray-700/50' 
          : 'hover:bg-gray-50'
      }`}
    >
      <div className="relative w-12 h-12 rounded-lg overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="flex-1">
        <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} group-hover:text-blue-600 dark:group-hover:text-blue-400`}>
          {title}
        </h3>
        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          {description}
        </p>
      </div>
    </a>
  );
};

export default ProductMenuItem;