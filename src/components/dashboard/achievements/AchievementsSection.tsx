import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { Trophy, Filter } from 'lucide-react';
import AchievementsList from './AchievementsList';
import AchievementStats from './AchievementStats';
import LeaderboardSection from './LeaderboardSection';

const AchievementsSection = () => {
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
              Achievements
            </h1>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Track your milestones and trading accomplishments
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <button className={`flex items-center px-4 py-2 rounded-lg text-sm ${
              isDarkMode 
                ? 'bg-gray-700 text-white hover:bg-gray-600' 
                : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
            } transition-colors`}>
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </button>
            <div className="flex items-center space-x-2 px-4 py-2 bg-gold/20 rounded-lg">
              <Trophy className="h-5 w-5 text-gold" />
              <span className="text-gold font-medium">2,450 Points</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Achievements List */}
        <div className="lg:col-span-2 space-y-6">
          <AchievementsList />
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <AchievementStats />
          <LeaderboardSection />
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;