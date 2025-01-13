import React, { useState } from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { BookOpen, Save, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';

const DailyReflection = () => {
  const { isDarkMode } = useTheme();
  const [achievements, setAchievements] = useState('');
  const [improvements, setImprovements] = useState('');
  const [gratitude, setGratitude] = useState('');
  const [isSaving, setSaving] = useState(false);

  const handleSave = () => {
    setSaving(true);
    // Simulate API call
    setTimeout(() => {
      setSaving(false);
      toast.success('Reflection saved successfully!');
    }, 1000);
  };

  return (
    <div className={`p-6 rounded-2xl ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    } border border-gray-200 dark:border-gray-700`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <BookOpen className="h-6 w-6 text-gold" />
          <h2 className={`text-lg font-bold ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Daily Reflection
          </h2>
        </div>
        <button
          onClick={handleSave}
          disabled={isSaving}
          className={`flex items-center space-x-2 px-4 py-2 bg-gold hover:bg-gold-light text-royal-dark rounded-lg transition-colors ${
            isSaving ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isSaving ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Saving...</span>
            </>
          ) : (
            <>
              <Save className="h-4 w-4" />
              <span>Save</span>
            </>
          )}
        </button>
      </div>

      <div className="space-y-6">
        <div>
          <label className={`block mb-2 font-medium ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            What did I achieve today?
          </label>
          <textarea
            value={achievements}
            onChange={(e) => setAchievements(e.target.value)}
            className={`w-full px-4 py-2 rounded-lg ${
              isDarkMode
                ? 'bg-gray-700 text-white placeholder-gray-400 border-gray-600'
                : 'bg-gray-100 text-gray-900 placeholder-gray-500 border-gray-200'
            } border focus:outline-none focus:ring-2 focus:ring-gold`}
            rows={2}
            placeholder="List your achievements..."
          />
        </div>

        <div>
          <label className={`block mb-2 font-medium ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            What can I improve tomorrow?
          </label>
          <textarea
            value={improvements}
            onChange={(e) => setImprovements(e.target.value)}
            className={`w-full px-4 py-2 rounded-lg ${
              isDarkMode
                ? 'bg-gray-700 text-white placeholder-gray-400 border-gray-600'
                : 'bg-gray-100 text-gray-900 placeholder-gray-500 border-gray-200'
            } border focus:outline-none focus:ring-2 focus:ring-gold`}
            rows={2}
            placeholder="Areas for improvement..."
          />
        </div>

        <div>
          <label className={`block mb-2 font-medium ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            What am I grateful for?
          </label>
          <textarea
            value={gratitude}
            onChange={(e) => setGratitude(e.target.value)}
            className={`w-full px-4 py-2 rounded-lg ${
              isDarkMode
                ? 'bg-gray-700 text-white placeholder-gray-400 border-gray-600'
                : 'bg-gray-100 text-gray-900 placeholder-gray-500 border-gray-200'
            } border focus:outline-none focus:ring-2 focus:ring-gold`}
            rows={2}
            placeholder="Express gratitude..."
          />
        </div>
      </div>
    </div>
  );
};

export default DailyReflection;