import React, { useState } from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import ContentList from './ContentList';
import ContentFilters from './ContentFilters';
import ContentStats from './ContentStats';
import MediaLibrary from './MediaLibrary';
import { FileText, Plus } from 'lucide-react';
import toast from 'react-hot-toast';

const ContentManager = () => {
  const { isDarkMode } = useTheme();
  const [selectedContent, setSelectedContent] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [showMediaLibrary, setShowMediaLibrary] = useState(false);

  const handleBulkAction = (action: 'publish' | 'unpublish' | 'delete') => {
    if (selectedContent.length === 0) {
      toast.error('Please select content items first');
      return;
    }

    toast.promise(
      new Promise((resolve) => setTimeout(resolve, 1000)),
      {
        loading: `${action}ing selected content...`,
        success: `Successfully ${action}ed ${selectedContent.length} items`,
        error: `Failed to ${action} content`
      }
    );

    setSelectedContent([]);
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
              Content Management
            </h1>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Manage all content across the platform
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowMediaLibrary(true)}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Media Library
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-gold hover:bg-gold-light text-royal-dark rounded-lg transition-colors">
              <Plus className="h-4 w-4" />
              <span>New Content</span>
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <ContentStats />

      {/* Filters and Search */}
      <ContentFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        typeFilter={typeFilter}
        onTypeFilterChange={setTypeFilter}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Content List */}
        <div className="lg:col-span-2">
          <ContentList
            selectedContent={selectedContent}
            onSelectContent={(contentId) => {
              setSelectedContent(prev => 
                prev.includes(contentId)
                  ? prev.filter(id => id !== contentId)
                  : [...prev, contentId]
              );
            }}
            onSelectAll={(content) => {
              setSelectedContent(prev => 
                prev.length === content.length ? [] : content.map(c => c.id)
              );
            }}
            searchQuery={searchQuery}
            typeFilter={typeFilter}
          />
        </div>

        {/* Quick Actions */}
        <div className={`p-6 rounded-xl ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        } border border-gray-200 dark:border-gray-700 h-fit`}>
          <div className="flex items-center space-x-3 mb-6">
            <FileText className="h-6 w-6 text-gold" />
            <h2 className={`text-lg font-bold ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Quick Actions
            </h2>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => handleBulkAction('publish')}
              disabled={selectedContent.length === 0}
              className="w-full px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors disabled:opacity-50"
            >
              Publish Selected
            </button>
            <button
              onClick={() => handleBulkAction('unpublish')}
              disabled={selectedContent.length === 0}
              className="w-full px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors disabled:opacity-50"
            >
              Unpublish Selected
            </button>
            <button
              onClick={() => handleBulkAction('delete')}
              disabled={selectedContent.length === 0}
              className="w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors disabled:opacity-50"
            >
              Delete Selected
            </button>
          </div>
        </div>
      </div>

      {/* Media Library Modal */}
      {showMediaLibrary && (
        <MediaLibrary onClose={() => setShowMediaLibrary(false)} />
      )}
    </div>
  );
};

export default ContentManager;