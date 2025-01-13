import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const filters = [
  'All Courses',
  'Technical Analysis',
  'Risk Management',
  'Trading Psychology',
  'Market Fundamentals',
  'Advanced Strategies'
];

const CourseFilters = () => {
  const { isDarkMode } = useTheme();
  const [activeFilter, setActiveFilter] = React.useState('All Courses');

  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === filter
                ? 'bg-blue-600 text-white'
                : `${isDarkMode 
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CourseFilters;