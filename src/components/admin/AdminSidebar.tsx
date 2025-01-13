import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { AdminTab } from '../../pages/admin/AdminDashboard';
import {
  LayoutDashboard,
  Users,
  FileText,
  GraduationCap,
  UserCog,
  UsersRound,
  Settings,
  LogOut,
  Shield
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

interface AdminSidebarProps {
  activeTab: AdminTab;
  onTabChange: (tab: AdminTab) => void;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ activeTab, onTabChange }) => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();

  const navItems = [
    { id: 'overview', label: 'System Overview', icon: LayoutDashboard },
    { id: 'users', label: 'User Management', icon: Users },
    { id: 'content', label: 'Content Manager', icon: FileText },
    { id: 'courses', label: 'Course Builder', icon: GraduationCap },
    { id: 'coaches', label: 'Coach Portal', icon: UserCog },
    { id: 'teams', label: 'Team Manager', icon: UsersRound },
    { id: 'config', label: 'System Config', icon: Settings }
  ];

  const handleLogout = () => {
    toast.success('Successfully logged out');
    navigate('/admin/login');
  };

  return (
    <div className={`fixed inset-y-0 left-0 w-64 ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    } border-r border-gray-200 dark:border-gray-700`}>
      <div className="h-full flex flex-col">
        <div className="flex items-center justify-center h-16 px-4 border-b border-gray-200 dark:border-gray-700">
          <Shield className="h-6 w-6 text-gold mr-2" />
          <span className={`text-xl font-bold ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Admin Portal
          </span>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id as AdminTab)}
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

        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={handleLogout}
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

export default AdminSidebar;