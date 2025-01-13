import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { Users } from 'lucide-react';

const TeamManager = () => {
  const { isDarkMode } = useTheme();

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
              Team Manager
            </h1>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Manage team members and assignments
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 bg-gold hover:bg-gold-light text-royal-dark rounded-lg transition-colors">
              <Users className="h-4 w-4" />
              <span>Add Member</span>
            </button>
          </div>
        </div>
      </div>

      {/* Team Manager content will go here */}
      <div className={`p-6 rounded-2xl ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      } border border-gray-200 dark:border-gray-700`}>
        <p className="text-center text-gray-500">Team Manager coming soon...</p>
      </div>
    </div>
  );
};

export default TeamManager;