import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { 
  UserPlus, 
  FileEdit, 
  Settings, 
  AlertTriangle,
  Database,
  Shield
} from 'lucide-react';

const activities = [
  {
    icon: <UserPlus className="h-5 w-5 text-emerald-500" />,
    title: "New User Registration",
    description: "John Doe registered a new account",
    time: "2 minutes ago",
    type: "user"
  },
  {
    icon: <FileEdit className="h-5 w-5 text-blue-500" />,
    title: "Content Updated",
    description: "Course 'Advanced Trading' was modified",
    time: "15 minutes ago",
    type: "content"
  },
  {
    icon: <Settings className="h-5 w-5 text-purple-500" />,
    title: "System Configuration",
    description: "Email settings were updated",
    time: "1 hour ago",
    type: "system"
  },
  {
    icon: <AlertTriangle className="h-5 w-5 text-red-500" />,
    title: "System Alert",
    description: "High CPU usage detected",
    time: "2 hours ago",
    type: "alert"
  },
  {
    icon: <Database className="h-5 w-5 text-gold" />,
    title: "Backup Completed",
    description: "System backup completed successfully",
    time: "3 hours ago",
    type: "backup"
  },
  {
    icon: <Shield className="h-5 w-5 text-emerald-500" />,
    title: "Security Update",
    description: "Security patches were applied",
    time: "4 hours ago",
    type: "security"
  }
];

const RecentActivity = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`p-6 rounded-xl ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    } border border-gray-200 dark:border-gray-700`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className={`text-lg font-bold ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Recent Activity
        </h2>
        <button className="text-sm text-gold hover:text-gold-light transition-colors">
          View All
        </button>
      </div>

      <div className="space-y-6">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-start space-x-4"
          >
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
    </div>
  );
};

export default RecentActivity;