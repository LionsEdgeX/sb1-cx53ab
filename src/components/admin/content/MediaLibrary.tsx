import React, { useState } from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { X, Upload, Image, Film, File, Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';

interface MediaItem {
  id: string;
  name: string;
  type: 'image' | 'video' | 'document';
  url: string;
  size: string;
  uploadedAt: string;
}

interface MediaLibraryProps {
  onClose: () => void;
}

// Mock media items
const mockMedia: MediaItem[] = [
  {
    id: '1',
    name: 'trading-chart.jpg',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80',
    size: '2.5 MB',
    uploadedAt: '2024-01-15'
  },
  {
    id: '2',
    name: 'market-analysis.mp4',
    type: 'video',
    url: 'https://example.com/video.mp4',
    size: '15.8 MB',
    uploadedAt: '2024-01-14'
  },
  {
    id: '3',
    name: 'trading-guide.pdf',
    type: 'document',
    url: 'https://example.com/doc.pdf',
    size: '1.2 MB',
    uploadedAt: '2024-01-13'
  }
];

const MediaLibrary: React.FC<MediaLibraryProps> = ({ onClose }) => {
  const { isDarkMode } = useTheme();
  const [selectedMedia, setSelectedMedia] = useState<string[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    // Handle file drop
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      toast.success(`${files.length} files ready to upload`);
    }
  };

  const getMediaIcon = (type: string) => {
    switch (type) {
      case 'image': return <Image className="h-6 w-6" />;
      case 'video': return <Film className="h-6 w-6" />;
      case 'document': return <File className="h-6 w-6" />;
      default: return <File className="h-6 w-6" />;
    }
  };

  const handleDelete = () => {
    if (selectedMedia.length === 0) {
      toast.error('Please select media items to delete');
      return;
    }

    toast.success(`Deleted ${selectedMedia.length} items`);
    setSelectedMedia([]);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className={`w-full max-w-4xl rounded-xl ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      } shadow-2xl`}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className={`text-xl font-bold ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Media Library
          </h2>
          <button
            onClick={onClose}
            className={`p-2 rounded-lg ${
              isDarkMode
                ? 'hover:bg-gray-700 text-gray-400 hover:text-white'
                : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
            } transition-colors`}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Upload Area */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
              isDragging
                ? 'border-gold bg-gold/5'
                : isDarkMode
                  ? 'border-gray-700 hover:border-gray-600'
                  : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <Upload className={`h-8 w-8 mx-auto mb-4 ${
              isDragging ? 'text-gold' : 'text-gray-400'
            }`} />
            <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
              Drag and drop files here, or{' '}
              <button className="text-gold hover:text-gold-light">browse</button>
            </p>
            <p className={`text-sm mt-2 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              Supports images, videos, and documents up to 50MB
            </p>
          </div>
        </div>

        {/* Media Grid */}
        <div className="p-6 max-h-[400px] overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockMedia.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  setSelectedMedia(prev => 
                    prev.includes(item.id)
                      ? prev.filter(id => id !== item.id)
                      : [...prev, item.id]
                  );
                }}
                className={`p-4 rounded-xl border-2 transition-colors cursor-pointer ${
                  selectedMedia.includes(item.id)
                    ? 'border-gold bg-gold/5'
                    : isDarkMode
                      ? 'border-gray-700 hover:border-gray-600 bg-gray-700'
                      : 'border-gray-200 hover:border-gray-300 bg-gray-50'
                }`}
              >
                {item.type === 'image' ? (
                  <div className="aspect-video rounded-lg overflow-hidden mb-4">
                    <img
                      src={item.url}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className={`aspect-video rounded-lg mb-4 flex items-center justify-center ${
                    isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
                  }`}>
                    {getMediaIcon(item.type)}
                  </div>
                )}
                <div className="flex items-start justify-between">
                  <div>
                    <p className={`font-medium truncate ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {item.name}
                    </p>
                    <p className={`text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-gray-200 dark:border-gray-700">
          <div className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
            {selectedMedia.length} items selected
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={handleDelete}
              disabled={selectedMedia.length === 0}
              className="flex items-center space-x-2 px-4 py-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors disabled:opacity-50"
            >
              <Trash2 className="h-4 w-4" />
              <span>Delete Selected</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gold hover:bg-gold-light text-royal-dark rounded-lg transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaLibrary;