import React, { useState } from 'react';
import { Menu as MenuIcon, X, Compass, Book, Users, Building } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import FloatingMenuItem from './FloatingMenuItem';
import { useNavigate, useLocation } from 'react-router-dom';

const FloatingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  // Hide menu on home page
  if (location.pathname === '/') {
    return null;
  }

  const menuItems = [
    {
      title: "5-Pillar Coaching™",
      icon: <Compass className="w-5 h-5" />,
      onClick: () => navigate('/coaching')
    },
    {
      title: "The Balancer BluePrint™",
      icon: <Book className="w-5 h-5" />,
      onClick: () => navigate('/balancer-blueprint')
    },
    {
      title: "Market Samurai",
      icon: <Users className="w-5 h-5" />,
      onClick: () => {
        navigate('/market-samurai');
        const loginForm = document.querySelector('form');
        if (loginForm) {
          loginForm.querySelector('button[type="button"]')?.click();
        }
      }
    },
    {
      title: "LNX Ventures",
      icon: <Building className="w-5 h-5" />,
      onClick: () => {}
    }
  ];

  return (
    <div className="fixed top-20 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex items-center justify-center w-12 h-12 rounded-full
          ${isDarkMode ? 'bg-gray-800' : 'bg-white'}
          shadow-lg hover:shadow-xl transform hover:scale-105
          transition-all duration-300 ease-in-out
          ${isOpen ? 'rotate-90' : 'rotate-0'}
        `}
      >
        {isOpen ? (
          <X className={`w-5 h-5 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} />
        ) : (
          <MenuIcon className={`w-5 h-5 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} />
        )}
      </button>

      <div className={`
        absolute top-16 right-0
        transition-all duration-300 ease-in-out
        ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none'}
      `}>
        <div className={`
          p-2 rounded-lg shadow-xl
          ${isDarkMode ? 'bg-gray-800' : 'bg-white'}
          min-w-[200px]
        `}>
          {menuItems.map((item, index) => (
            <FloatingMenuItem
              key={index}
              {...item}
              onSelect={() => {
                item.onClick();
                setIsOpen(false);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FloatingMenu;