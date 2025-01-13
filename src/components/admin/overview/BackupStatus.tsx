import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { Database, Clock, HardDrive, Cloud } from 'lucide-react';

const BackupStatus = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`p-6 rounded-xl ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    } border border-gray-200 dark:border-gray-700`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className={`text-lg font-bold ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Backup Status
        </h2>
        <Database className="h-5 w-5 text-gold" />
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-lg ${
              isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
            }`}>
              <Clock className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <p className={`font-medium ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Last Backup
              </p>
              <p className={`text-sm ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                2 hours ago
              </p>
            </div>
          </div>
          <span className="px-2 py-1 text-sm bg-emerald-500/10 text-emerald-500 rounded-lg">
            Success
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-lg ${
              isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
            }`}>
              <HardDrive className="h-5 w-5 text-purple-500" />
            </div>
            <div>
              <p className={`font-medium ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Storage Used
              </p>
              <p className={`text-sm ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                45.2 GB of 100 GB
              </p>
            </div>
          </div>
          <span className="text-sm text-gold">45%</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-lg ${
              isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
            }`}>
              <Cloud className="h-5 w-5 text-emerald-500" />
            </div>
            <div>
              <p className={`font-medium ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Next Backup
              </p>
              <p className={`text-sm ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                In 4 hours
              </p>
            </div>
          </div>
          <span className="px-2 py-1 text-sm bg-blue-500/10 text-blue-500 rounded-lg">
            Scheduled
          </span>
        </div>

        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gold rounded-full transition-all duration-500"
            style={{ width: '45%' }}
          />
        </div>

        <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gold hover:bg-gold-light text-royal-dark rounded-lg transition-colors">
          <Database className="h-4 w-4" />
          <span>Backup Now</span>
        </button>
      </div>
    </div>
  );
};

export default BackupStatus;