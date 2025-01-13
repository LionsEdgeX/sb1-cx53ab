import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { Target, Trophy, BookOpen, Users } from 'lucide-react';

const activities = [
  {
    icon: <Trophy className="h-5 w-5 text-purple-500" />,
    title: "Earned Achievement",
    description: "Completed 10 successful trades",
    time: "2 hours ago"
  },
  {
    icon: <Target className="h-5 w-5 text-emerald-500" />,
    title: "Goal Progress",
    description: "75% complete: Monthly profit target",
    time: "5 hours ago"
  },
  {
    icon: <BookOpen className="h-5 w-5 text-blue-500" />,
    title: "Course Progress",
    description: "Completed Technical Analysis module",
    time: "1 day ago"
  },
  {
    icon: <Users className="h-5 w-5 text-gold" />,
    title: "Community",
    description: "Joined weekly trading session",
    time: "2 days ago"
  }
];

const RecentActivity = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="space-y-6">
      {activities.map((activity, index) => (
        <div key={index} className="flex items-start space-x-4">
          <div className={`p-2 rounded-lg ${
            isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
          }`}>
            {activity.icon}
          </div>
          <div className="flex-1 min-w-0">
            <p className={`text-sm font-medium mb-1 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {activity.title}
            </p>
            <p className={`text-sm ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {activity.description}
            </p>
            <p className={`text-xs ${
              isDarkMode ? 'text-gray-500' : 'text-gray-400'
            }`}>
              {activity.time}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentActivity;