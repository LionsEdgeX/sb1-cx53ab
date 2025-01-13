import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { BookOpen, Star, ArrowRight } from 'lucide-react';

const recommendedCourses = [
  {
    title: "Price Action Mastery",
    rating: 4.9,
    students: 2150,
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80"
  },
  {
    title: "Advanced Order Flow",
    rating: 4.8,
    students: 1850,
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80"
  },
  {
    title: "Market Psychology",
    rating: 4.7,
    students: 1650,
    image: "https://images.unsplash.com/photo-1579226905180-636b76d96082?auto=format&fit=crop&q=80"
  }
];

const RecommendedCourses = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`p-6 rounded-2xl ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    } border border-gray-200 dark:border-gray-700`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className={`text-lg font-bold ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Recommended
        </h2>
        <BookOpen className="h-5 w-5 text-gold" />
      </div>

      <div className="space-y-4">
        {recommendedCourses.map((course, index) => (
          <button
            key={index}
            className={`w-full flex items-start space-x-4 p-3 rounded-xl ${
              isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
            } transition-colors text-left group`}
          >
            <div className="relative w-20 h-20 rounded-lg overflow-hidden">
              <img 
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className={`font-medium mb-1 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {course.title}
              </h3>
              <div className="flex items-center space-x-2 text-sm">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-gold fill-current mr-1" />
                  <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                    {course.rating}
                  </span>
                </div>
                <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>•</span>
                <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                  {course.students} students
                </span>
              </div>
            </div>

            <ArrowRight className={`h-5 w-5 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            } group-hover:text-gold transition-colors`} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default RecommendedCourses;