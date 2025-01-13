import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { Search, Filter } from 'lucide-react';

interface UserFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  roleFilter: string;
  onRoleFilterChange: (role: string) => void;
}

const UserFilters: React.FC<UserFiltersProps> = ({
  searchQuery,
  onSearchChange,
  roleFilter,
  onRoleFilterChange
}) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`p-6 rounded-xl ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    } border border-gray-200 dark:border-gray-700`}>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 md:space-x-4">
        {/* Search */}
        <div className="relative flex-1">
          <Search className={`absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-500'
          }`} />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search users..."
            className={`w-full pl-10 pr-4 py-2 rounded-lg ${
              isDarkMode
                ? 'bg-gray-700 text-white placeholder-gray-400 border-gray-600'
                : 'bg-gray-100 text-gray-900 placeholder-gray-500 border-gray-200'
            } border focus:outline-none focus:ring-2 focus:ring-gold`}
          />
        </div>

        {/* Filters */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Filter className={`h-5 w-5 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`} />
            <select
              value={roleFilter}
              onChange={(e) => onRoleFilterChange(e.target.value)}
              className={`px-4 py-2 rounded-lg ${
                isDarkMode
                  ? 'bg-gray-700 text-white border-gray-600'
                  : 'bg-gray-100 text-gray-900 border-gray-200'
              } border focus:outline-none focus:ring-2 focus:ring-gold`}
            >
              <option value="all">All Roles</option>
              <option value="SUPER_ADMIN">Super Admin</option>
              <option value="SYSTEM_ADMIN">System Admin</option>
              <option value="CONTENT_MANAGER">Content Manager</option>
              <option value="COACH">Coach</option>
              <option value="TEAM_LEAD">Team Lead</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserFilters;