import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { Clock, Users, Star, ArrowRight } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: "Advanced Technical Analysis",
    description: "Master chart patterns, indicators, and market structure analysis",
    progress: 75,
    duration: "8 weeks",
    students: 1250,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80",
    status: "in_progress"
  },
  {
    id: 2,
    title: "Risk Management Mastery",
    description: "Learn professional risk management techniques and position sizing",
    progress: 100,
    duration: "4 weeks",
    students: 980,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    status: "completed"
  },
  {
    id: 3,
    title: "Trading Psychology",
    description: "Develop the mindset of successful traders and overcome emotional barriers",
    progress: 30,
    duration: "6 weeks",
    students: 1500,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1579226905180-636b76d96082?auto=format&fit=crop&q=80",
    status: "in_progress"
  }
];

const CoursesList = () => {
  const { isDarkMode } = useTheme();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-emerald-500 bg-emerald-500/10';
      case 'in_progress':
        return 'text-blue-500 bg-blue-500/10';
      default:
        return 'text-gray-500 bg-gray-500/10';
    }
  };

  const getStatusText = (status: string) => {
    return status.split('_').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  return (
    <div className="space-y-6">
      {courses.map((course) => (
        <div
          key={course.id}
          className={`p-6 rounded-2xl ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          } border border-gray-200 dark:border-gray-700 hover:border-gold/50 transition-colors`}
        >
          <div className="flex space-x-6">
            {/* Course Image */}
            <div className="relative w-48 h-32 rounded-xl overflow-hidden">
              <img 
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <span className={`absolute bottom-2 left-2 px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(course.status)}`}>
                {getStatusText(course.status)}
              </span>
            </div>

            {/* Course Content */}
            <div className="flex-1">
              <div className="flex items-start justify-between mb-2">
                <h3 className={`text-xl font-bold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {course.title}
                </h3>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-gold fill-current" />
                  <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                    {course.rating}
                  </span>
                </div>
              </div>

              <p className={`text-sm mb-4 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {course.description}
              </p>

              <div className="space-y-4">
                {/* Progress Bar */}
                {course.status !== 'completed' && (
                  <div>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                        Progress
                      </span>
                      <span className={`font-medium ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {course.progress}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gold rounded-full transition-all duration-500"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* Course Meta */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-gold mr-1" />
                      <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                        {course.duration}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-gold mr-1" />
                      <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                        {course.students} students
                      </span>
                    </div>
                  </div>
                  <button className="flex items-center text-gold hover:text-gold-light transition-colors">
                    <span className="mr-1">
                      {course.status === 'completed' ? 'Review' : 'Continue'}
                    </span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoursesList;