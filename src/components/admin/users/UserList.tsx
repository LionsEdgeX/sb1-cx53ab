import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { AdminUser } from '../../../types/admin';
import { Shield, MoreVertical, Edit2, Trash2, UserX, UserCheck } from 'lucide-react';
import toast from 'react-hot-toast';

interface UserListProps {
  selectedUsers: string[];
  onSelectUser: (userId: string) => void;
  onSelectAll: (users: AdminUser[]) => void;
  searchQuery: string;
  roleFilter: string;
}

// Mock user data
const mockUsers: AdminUser[] = Array.from({ length: 10 }, (_, i) => ({
  id: `user-${i + 1}`,
  email: `user${i + 1}@example.com`,
  firstName: `John${i + 1}`,
  lastName: `Doe${i + 1}`,
  role: i === 0 ? 'SUPER_ADMIN' : i < 3 ? 'SYSTEM_ADMIN' : i < 6 ? 'CONTENT_MANAGER' : 'COACH',
  permissions: [],
  mfaEnabled: i % 2 === 0,
  lastLogin: new Date(Date.now() - i * 86400000).toISOString(),
  status: i % 3 === 0 ? 'ACTIVE' : i % 3 === 1 ? 'INACTIVE' : 'SUSPENDED',
  createdAt: new Date(Date.now() - i * 86400000 * 30).toISOString(),
  updatedAt: new Date(Date.now() - i * 86400000).toISOString()
}));

const UserList: React.FC<UserListProps> = ({
  selectedUsers,
  onSelectUser,
  onSelectAll,
  searchQuery,
  roleFilter
}) => {
  const { isDarkMode } = useTheme();
  const [showActions, setShowActions] = React.useState<string | null>(null);

  const filteredUsers = mockUsers.filter(user => {
    const matchesSearch = searchQuery === '' || 
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesRole = roleFilter === 'all' || user.role === roleFilter;

    return matchesSearch && matchesRole;
  });

  const handleAction = (action: string, user: AdminUser) => {
    setShowActions(null);
    
    switch (action) {
      case 'edit':
        toast.success(`Editing user: ${user.email}`);
        break;
      case 'delete':
        toast.success(`Deleted user: ${user.email}`);
        break;
      case 'activate':
        toast.success(`Activated user: ${user.email}`);
        break;
      case 'deactivate':
        toast.success(`Deactivated user: ${user.email}`);
        break;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ACTIVE': return 'text-emerald-500 bg-emerald-500/10';
      case 'INACTIVE': return 'text-yellow-500 bg-yellow-500/10';
      case 'SUSPENDED': return 'text-red-500 bg-red-500/10';
      default: return 'text-gray-500 bg-gray-500/10';
    }
  };

  return (
    <div className={`rounded-xl ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    } border border-gray-200 dark:border-gray-700 overflow-hidden`}>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className={`text-sm ${
            isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-50 text-gray-600'
          }`}>
            <tr>
              <th className="px-6 py-3 text-left">
                <input
                  type="checkbox"
                  checked={selectedUsers.length === filteredUsers.length}
                  onChange={() => onSelectAll(filteredUsers)}
                  className="rounded border-gray-300 text-gold focus:ring-gold"
                />
              </th>
              <th className="px-6 py-3 text-left">User</th>
              <th className="px-6 py-3 text-left">Role</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Last Login</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {filteredUsers.map((user) => (
              <tr key={user.id} className={`text-sm ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <td className="px-6 py-4">
                  <input
                    type="checkbox"
                    checked={selectedUsers.includes(user.id)}
                    onChange={() => onSelectUser(user.id)}
                    className="rounded border-gray-300 text-gold focus:ring-gold"
                  />
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                      <span className={`text-lg font-medium ${
                        isDarkMode ? 'text-white' : 'text-gray-700'
                      }`}>
                        {user.firstName[0]}{user.lastName[0]}
                      </span>
                    </div>
                    <div className="ml-4">
                      <div className={`font-medium ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {user.firstName} {user.lastName}
                      </div>
                      <div className="text-sm text-gray-500">{user.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-gold" />
                    <span>{user.role}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    getStatusColor(user.status)
                  }`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {new Date(user.lastLogin).toLocaleDateString()}
                </td>
                <td className="px-6 py-4">
                  <div className="relative">
                    <button
                      onClick={() => setShowActions(showActions === user.id ? null : user.id)}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <MoreVertical className="h-5 w-5" />
                    </button>
                    
                    {showActions === user.id && (
                      <div className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg ${
                        isDarkMode ? 'bg-gray-700' : 'bg-white'
                      } ring-1 ring-black ring-opacity-5 z-10`}>
                        <div className="py-1">
                          <button
                            onClick={() => handleAction('edit', user)}
                            className={`flex items-center w-full px-4 py-2 text-sm ${
                              isDarkMode
                                ? 'text-gray-300 hover:bg-gray-600'
                                : 'text-gray-700 hover:bg-gray-100'
                            }`}
                          >
                            <Edit2 className="h-4 w-4 mr-3" />
                            Edit User
                          </button>
                          {user.status === 'ACTIVE' ? (
                            <button
                              onClick={() => handleAction('deactivate', user)}
                              className={`flex items-center w-full px-4 py-2 text-sm ${
                                isDarkMode
                                  ? 'text-gray-300 hover:bg-gray-600'
                                  : 'text-gray-700 hover:bg-gray-100'
                              }`}
                            >
                              <UserX className="h-4 w-4 mr-3" />
                              Deactivate User
                            </button>
                          ) : (
                            <button
                              onClick={() => handleAction('activate', user)}
                              className={`flex items-center w-full px-4 py-2 text-sm ${
                                isDarkMode
                                  ? 'text-gray-300 hover:bg-gray-600'
                                  : 'text-gray-700 hover:bg-gray-100'
                              }`}
                            >
                              <UserCheck className="h-4 w-4 mr-3" />
                              Activate User
                            </button>
                          )}
                          <button
                            onClick={() => handleAction('delete', user)}
                            className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                          >
                            <Trash2 className="h-4 w-4 mr-3" />
                            Delete User
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;