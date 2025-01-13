import React from 'react';
import CourseHero from '../components/courses/CourseHero';
import CourseGrid from '../components/courses/CourseGrid';
import CourseFilters from '../components/courses/CourseFilters';
import { useTheme } from '../contexts/ThemeContext';

const CoursesDirectory = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <CourseHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <CourseFilters />
        <CourseGrid />
      </div>
    </div>
  );
};

export default CoursesDirectory;