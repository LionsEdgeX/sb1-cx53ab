import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Bell, Search, User } from 'lucide-react';

const DashboardHeader = () => {
  const { isDarkMode } = useTheme();

  return (
    <header className={`h-16 ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    } border-b border-gray-200 dark:border-gray-700`}>
      <div className="h-full px-6 flex items-center justify-between">
        <div className="relative w-96">
          <Search className={`absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-500'
          }`} />
          <input
            type="search"
            placeholder="Search..."
            className={`w-full pl-10 pr-4 py-2 rounded-lg ${
              isDarkMode
                ? 'bg-gray-700 text-white placeholder-gray-400 border-gray-600'
                : 'bg-gray-100 text-gray-900 placeholder-gray-500 border-gray-200'
            } border focus:outline-none focus:ring-2 focus:ring-gold`}
          />
        </div>

        <div className="flex items-center space-x-4">
          <button className={`p-2 rounded-lg ${
            isDarkMode
              ? 'hover:bg-gray-700 text-gray-400 hover:text-white'
              : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
          } transition-colors`}>
            <Bell className="h-5 w-5" />
          </button>

          <div className="flex items-center space-x-3">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
              alt="Profile"
              className="h-8 w-8 rounded-full object-cover"
            />
            <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>
              John Doe
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;