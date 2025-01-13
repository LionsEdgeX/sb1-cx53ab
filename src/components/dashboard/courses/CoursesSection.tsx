import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { Search, Filter, BookOpen } from 'lucide-react';
import CoursesList from './CoursesList';
import LearningProgress from './LearningProgress';
import RecommendedCourses from './RecommendedCourses';

const CoursesSection = () => {
  const { isDarkMode } = useTheme();

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
              My Courses
            </h1>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Track your learning progress and access educational content
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className={`absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }`} />
              <input
                type="search"
                placeholder="Search courses..."
                className={`pl-10 pr-4 py-2 rounded-lg ${
                  isDarkMode
                    ? 'bg-gray-700 text-white placeholder-gray-400 border-gray-600'
                    : 'bg-gray-100 text-gray-900 placeholder-gray-500 border-gray-200'
                } border focus:outline-none focus:ring-2 focus:ring-gold`}
              />
            </div>
            <button className={`flex items-center px-4 py-2 rounded-lg text-sm ${
              isDarkMode 
                ? 'bg-gray-700 text-white hover:bg-gray-600' 
                : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
            } transition-colors`}>
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </button>
            <div className="flex items-center space-x-2 px-4 py-2 bg-gold/20 rounded-lg">
              <BookOpen className="h-5 w-5 text-gold" />
              <span className="text-gold font-medium">4/12 Completed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Courses List */}
        <div className="lg:col-span-2 space-y-6">
          <CoursesList />
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <LearningProgress />
          <RecommendedCourses />
        </div>
      </div>
    </div>
  );
};

export default CoursesSection;