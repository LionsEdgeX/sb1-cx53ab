import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { Shield, Plus, Edit2, Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';

const roles = [
  {
    name: 'SUPER_ADMIN',
    description: 'Full system access and control',
    users: 2,
    permissions: ['all']
  },
  {
    name: 'SYSTEM_ADMIN',
    description: 'System configuration and management',
    users: 5,
    permissions: ['manage_users', 'manage_content', 'view_analytics']
  },
  {
    name: 'CONTENT_MANAGER',
    description: 'Content creation and management',
    users: 8,
    permissions: ['manage_content', 'view_analytics']
  },
  {
    name: 'COACH',
    description: 'Course management and student interaction',
    users: 15,
    permissions: ['manage_courses', 'view_analytics']
  },
  {
    name: 'TEAM_LEAD',
    description: 'Team management and coordination',
    users: 10,
    permissions: ['manage_team', 'view_analytics']
  }
];

const RoleManager = () => {
  const { isDarkMode } = useTheme();

  const handleAction = (action: 'edit' | 'delete', role: string) => {
    switch (action) {
      case 'edit':
        toast.success(`Editing role: ${role}`);
        break;
      case 'delete':
        toast.error('Cannot delete system roles');
        break;
    }
  };

  return (
    <div className={`p-6 rounded-xl ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    } border border-gray-200 dark:border-gray-700`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Shield className="h-6 w-6 text-gold" />
          <h2 className={`text-lg font-bold ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Roles & Permissions
          </h2>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-gold hover:bg-gold-light text-royal-dark rounded-lg transition-colors">
          <Plus className="h-4 w-4" />
          <span>New Role</span>
        </button>
      </div>

      <div className="space-y-4">
        {roles.map((role) => (
          <div
            key={role.name}
            className={`p-4 rounded-xl ${
              isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
            } hover:border-gold/50 transition-all`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                <Shield className="h-5 w-5 text-gold" />
                <h3 className={`font-medium ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {role.name}
                </h3>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleAction('edit', role.name)}
                  className={`p-1 rounded-lg ${
                    isDarkMode
                      ? 'hover:bg-gray-600'
                      : 'hover:bg-gray-200'
                  } transition-colors`}
                >
                  <Edit2 className="h-4 w-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
                </button>
                <button
                  onClick={() => handleAction('delete', role.name)}
                  className="p-1 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/20 transition-colors"
                >
                  <Trash2 className="h-4 w-4 text-red-500" />
                </button>
              </div>
            </div>
            <p className={`text-sm mb-2 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {role.description}
            </p>
            <div className="flex items-center justify-between text-sm">
              <div className="flex flex-wrap gap-2">
                {role.permissions.map((permission) => (
                  <span
                    key={permission}
                    className="px-2 py-1 bg-gold/20 text-gold rounded-full text-xs"
                  >
                    {permission}
                  </span>
                ))}
              </div>
              <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                {role.users} users
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoleManager;