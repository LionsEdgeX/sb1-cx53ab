import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { Trophy, Target, BookOpen, TrendingUp, Users } from 'lucide-react';

const achievements = [
  {
    id: 1,
    title: "Master Trader",
    description: "Achieved 80% win rate over 100 trades",
    category: "Performance",
    points: 500,
    icon: <TrendingUp className="h-6 w-6 text-emerald-500" />,
    date: "2024-01-15",
    isNew: true
  },
  {
    id: 2,
    title: "Risk Management Expert",
    description: "Maintained proper position sizing for 30 consecutive trades",
    category: "Risk Management",
    points: 300,
    icon: <Target className="h-6 w-6 text-purple-500" />,
    date: "2024-01-10"
  },
  {
    id: 3,
    title: "Technical Analysis Guru",
    description: "Completed all advanced chart pattern courses",
    category: "Education",
    points: 400,
    icon: <BookOpen className="h-6 w-6 text-blue-500" />,
    date: "2024-01-05"
  },
  {
    id: 4,
    title: "Community Leader",
    description: "Helped 50 traders with valuable insights",
    category: "Community",
    points: 250,
    icon: <Users className="h-6 w-6 text-gold" />,
    date: "2024-01-01"
  }
];

const AchievementsList = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="space-y-4">
      {achievements.map((achievement) => (
        <div
          key={achievement.id}
          className={`p-6 rounded-2xl ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          } border border-gray-200 dark:border-gray-700 hover:border-gold/50 transition-colors`}
        >
          <div className="flex items-start space-x-4">
            <div className={`p-3 rounded-xl ${
              isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
            }`}>
              {achievement.icon}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <h3 className={`font-bold ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {achievement.title}
                  </h3>
                  {achievement.isNew && (
                    <span className="px-2 py-1 bg-gold/20 text-gold text-xs font-medium rounded-full">
                      New!
                    </span>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <Trophy className="h-4 w-4 text-gold" />
                  <span className="text-gold font-medium">
                    {achievement.points} pts
                  </span>
                </div>
              </div>
              <p className={`text-sm mb-3 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {achievement.description}
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className={`px-3 py-1 rounded-full ${
                  isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                }`}>
                  {achievement.category}
                </span>
                <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                  Achieved on {achievement.date}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AchievementsList;