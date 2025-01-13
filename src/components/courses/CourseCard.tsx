import React from 'react';
import { Clock, Users, Star, ArrowRight } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  level: string;
  duration: string;
  rating: number;
  students: number;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  image,
  level,
  duration,
  rating,
  students
}) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`group relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-2xl ${
      isDarkMode ? 'bg-royal-dark' : 'bg-white'
    }`}>
      {/* Course Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-royal-dark/60 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            level === 'Beginner' ? 'bg-emerald text-royal-dark' :
            level === 'Intermediate' ? 'bg-gold text-royal-dark' :
            'bg-royal text-white'
          }`}>
            {level}
          </span>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-6">
        <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-royal-dark'}`}>
          {title}
        </h3>
        <p className={`text-sm mb-4 ${isDarkMode ? 'text-royal-light' : 'text-royal'}`}>
          {description}
        </p>

        {/* Course Meta */}
        <div className="flex items-center justify-between text-sm mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Clock className="h-4 w-4 text-gold mr-1" />
              <span className={isDarkMode ? 'text-royal-light' : 'text-royal'}>{duration}</span>
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 text-gold mr-1" />
              <span className={isDarkMode ? 'text-royal-light' : 'text-royal'}>{students}</span>
            </div>
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-gold fill-current mr-1" />
            <span className={isDarkMode ? 'text-royal-light' : 'text-royal'}>{rating}</span>
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full flex items-center justify-center space-x-2 bg-gold hover:bg-gold-light text-royal-dark py-2 rounded-lg transition-colors">
          <span>Enroll Now</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default CourseCard;