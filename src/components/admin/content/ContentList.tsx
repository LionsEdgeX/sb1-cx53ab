import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { FileText, MoreVertical, Edit2, Trash2, Eye, EyeOff } from 'lucide-react';
import toast from 'react-hot-toast';

interface ContentItem {
  id: string;
  title: string;
  type: 'article' | 'course' | 'video' | 'ebook';
  author: string;
  status: 'published' | 'draft' | 'archived';
  lastModified: string;
  views: number;
}

interface ContentListProps {
  selectedContent: string[];
  onSelectContent: (contentId: string) => void;
  onSelectAll: (content: ContentItem[]) => void;
  searchQuery: string;
  typeFilter: string;
}

// Mock content data
const mockContent: ContentItem[] = Array.from({ length: 10 }, (_, i) => ({
  id: `content-${i + 1}`,
  title: `Sample Content ${i + 1}`,
  type: ['article', 'course', 'video', 'ebook'][i % 4] as ContentItem['type'],
  author: `Author ${i + 1}`,
  status: ['published', 'draft', 'archived'][i % 3] as ContentItem['status'],
  lastModified: new Date(Date.now() - i * 86400000).toISOString(),
  views: Math.floor(Math.random() * 10000)
}));

const ContentList: React.FC<ContentListProps> = ({
  selectedContent,
  onSelectContent,
  onSelectAll,
  searchQuery,
  typeFilter
}) => {
  const { isDarkMode } = useTheme();
  const [showActions, setShowActions] = React.useState<string | null>(null);

  const filteredContent = mockContent.filter(content => {
    const matchesSearch = searchQuery === '' || 
      content.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      content.author.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesType = typeFilter === 'all' || content.type === typeFilter;

    return matchesSearch && matchesType;
  });

  const handleAction = (action: string, content: ContentItem) => {
    setShowActions(null);
    
    switch (action) {
      case 'edit':
        toast.success(`Editing: ${content.title}`);
        break;
      case 'delete':
        toast.success(`Deleted: ${content.title}`);
        break;
      case 'publish':
        toast.success(`Published: ${content.title}`);
        break;
      case 'unpublish':
        toast.success(`Unpublished: ${content.title}`);
        break;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'text-emerald-500 bg-emerald-500/10';
      case 'draft': return 'text-yellow-500 bg-yellow-500/10';
      case 'archived': return 'text-red-500 bg-red-500/10';
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
                  checked={selectedContent.length === filteredContent.length}
                  onChange={() => onSelectAll(filteredContent)}
                  className="rounded border-gray-300 text-gold focus:ring-gold"
                />
              </th>
              <th className="px-6 py-3 text-left">Title</th>
              <th className="px-6 py-3 text-left">Type</th>
              <th className="px-6 py-3 text-left">Author</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Views</th>
              <th className="px-6 py-3 text-left">Last Modified</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {filteredContent.map((content) => (
              <tr key={content.id} className={`text-sm ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <td className="px-6 py-4">
                  <input
                    type="checkbox"
                    checked={selectedContent.includes(content.id)}
                    onChange={() => onSelectContent(content.id)}
                    className="rounded border-gray-300 text-gold focus:ring-gold"
                  />
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 text-gold mr-3" />
                    <span className={`font-medium ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {content.title}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 capitalize">{content.type}</td>
                <td className="px-6 py-4">{content.author}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    getStatusColor(content.status)
                  }`}>
                    {content.status.charAt(0).toUpperCase() + content.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4">{content.views.toLocaleString()}</td>
                <td className="px-6 py-4">
                  {new Date(content.lastModified).toLocaleDateString()}
                </td>
                <td className="px-6 py-4">
                  <div className="relative">
                    <button
                      onClick={() => setShowActions(showActions === content.id ? null : content.id)}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <MoreVertical className="h-5 w-5" />
                    </button>
                    
                    {showActions === content.id && (
                      <div className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg ${
                        isDarkMode ? 'bg-gray-700' : 'bg-white'
                      } ring-1 ring-black ring-opacity-5 z-10`}>
                        <div className="py-1">
                          <button
                            onClick={() => handleAction('edit', content)}
                            className={`flex items-center w-full px-4 py-2 text-sm ${
                              isDarkMode
                                ? 'text-gray-300 hover:bg-gray-600'
                                : 'text-gray-700 hover:bg-gray-100'
                            }`}
                          >
                            <Edit2 className="h-4 w-4 mr-3" />
                            Edit
                          </button>
                          {content.status === 'published' ? (
                            <button
                              onClick={() => handleAction('unpublish', content)}
                              className={`flex items-center w-full px-4 py-2 text-sm ${
                                isDarkMode
                                  ? 'text-gray-300 hover:bg-gray-600'
                                  : 'text-gray-700 hover:bg-gray-100'
                              }`}
                            >
                              <EyeOff className="h-4 w-4 mr-3" />
                              Unpublish
                            </button>
                          ) : (
                            <button
                              onClick={() => handleAction('publish', content)}
                              className={`flex items-center w-full px-4 py-2 text-sm ${
                                isDarkMode
                                  ? 'text-gray-300 hover:bg-gray-600'
                                  : 'text-gray-700 hover:bg-gray-100'
                              }`}
                            >
                              <Eye className="h-4 w-4 mr-3" />
                              Publish
                            </button>
                          )}
                          <button
                            onClick={() => handleAction('delete', content)}
                            className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                          >
                            <Trash2 className="h-4 w-4 mr-3" />
                            Delete
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

export default ContentList;