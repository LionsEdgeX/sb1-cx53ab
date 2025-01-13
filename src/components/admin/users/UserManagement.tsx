import React, { useState } from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import UserList from './UserList';
import UserFilters from './UserFilters';
import UserStats from './UserStats';
import RoleManager from './RoleManager';
import { AdminUser } from '../../../types/admin';
import toast from 'react-hot-toast';

const UserManagement = () => {
  const { isDarkMode } = useTheme();
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState<string>('all');

  const handleBulkAction = (action: 'activate' | 'deactivate' | 'delete') => {
    if (selectedUsers.length === 0) {
      toast.error('Please select users first');
      return;
    }

    // Simulate API call
    toast.promise(
      new Promise((resolve) => setTimeout(resolve, 1000)),
      {
        loading: `${action}ing selected users...`,
        success: `Successfully ${action}d ${selectedUsers.length} users`,
        error: `Failed to ${action} users`
      }
    );

    setSelectedUsers([]);
  };

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
              User Management
            </h1>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Manage user accounts, roles, and permissions
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => handleBulkAction('activate')}
              disabled={selectedUsers.length === 0}
              className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors disabled:opacity-50"
            >
              Activate Selected
            </button>
            <button
              onClick={() => handleBulkAction('deactivate')}
              disabled={selectedUsers.length === 0}
              className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors disabled:opacity-50"
            >
              Deactivate Selected
            </button>
            <button
              onClick={() => handleBulkAction('delete')}
              disabled={selectedUsers.length === 0}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors disabled:opacity-50"
            >
              Delete Selected
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <UserStats />

      {/* Filters and Search */}
      <UserFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        roleFilter={roleFilter}
        onRoleFilterChange={setRoleFilter}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* User List */}
        <div className="lg:col-span-2">
          <UserList
            selectedUsers={selectedUsers}
            onSelectUser={(userId) => {
              setSelectedUsers(prev => 
                prev.includes(userId)
                  ? prev.filter(id => id !== userId)
                  : [...prev, userId]
              );
            }}
            onSelectAll={(users) => {
              setSelectedUsers(prev => 
                prev.length === users.length ? [] : users.map(u => u.id)
              );
            }}
            searchQuery={searchQuery}
            roleFilter={roleFilter}
          />
        </div>

        {/* Role Manager */}
        <RoleManager />
      </div>
    </div>
  );
};

export default UserManagement;