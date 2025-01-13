import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { useAuth } from '../../hooks/useAuth';
import { DashboardTab } from '../../types/dashboard';
import {
  LayoutDashboard,
  LineChart,
  Target,
  Trophy,
  GraduationCap,
  Users,
  Settings,
  LogOut
} from 'lucide-react';

interface DashboardSidebarProps {
  activeTab: DashboardTab;
  onTabChange: (tab: DashboardTab) => void;
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ activeTab, onTabChange }) => {
  const { isDarkMode } = useTheme();
  const { signOut } = useAuth();

  const navItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'evaluation', label: 'Self-Evaluation', icon: Target },
    { id: 'progress', label: 'Progress', icon: LineChart },
    { id: 'goals', label: 'Goals', icon: Target },
    { id: 'achievements', label: 'Achievements', icon: Trophy },
    { id: 'courses', label: 'Courses', icon: GraduationCap },
    { id: 'community', label: 'Community', icon: Users }
  ];

  return (
    <div className={`fixed inset-y-0 left-0 w-64 ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    } border-r border-gray-200 dark:border-gray-700`}>
      <div className="h-full flex flex-col">
        <div className="flex items-center justify-center h-16 px-4 border-b border-gray-200 dark:border-gray-700">
          <span className={`text-xl font-bold ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            LionsEdgeX LAB
          </span>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id as DashboardTab)}
                className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                  activeTab === item.id
                    ? 'bg-gold text-royal-dark'
                    : `${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} hover:bg-gray-100 dark:hover:bg-gray-700`
                }`}
              >
                <Icon className="h-5 w-5 mr-3" />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-200 dark:border-gray-700 space-y-2">
          <button className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
            isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
          } hover:bg-gray-100 dark:hover:bg-gray-700`}>
            <Settings className="h-5 w-5 mr-3" />
            Settings
          </button>
          <button 
            onClick={signOut}
            className="w-full flex items-center px-4 py-3 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
          >
            <LogOut className="h-5 w-5 mr-3" />
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;