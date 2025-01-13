import React from 'react';
import { Clock, Users, Star } from 'lucide-react';

interface FeaturedCourseProps {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  students: number;
  rating: number;
  price: number;
  onClick: () => void;
}

const FeaturedCourse: React.FC<FeaturedCourseProps> = ({
  title,
  description,
  image,
  duration,
  students,
  rating,
  price,
  onClick
}) => {
  return (
    <button 
      onClick={onClick}
      className="w-full text-left bg-white dark:bg-primary-200 rounded-xl shadow-lg overflow-hidden transition-all hover:scale-105 hover:shadow-xl"
    >
      <div className="relative h-48">
        <img src={image} alt={title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-200/80 to-transparent" />
        <div className="absolute bottom-4 right-4 bg-gold text-royal-dark px-4 py-2 rounded-full font-bold">
          ${price}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary-200 dark:text-white mb-2">{title}</h3>
        <p className="text-primary-300 dark:text-primary-100 mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between text-sm text-primary-200 dark:text-primary-100">
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4" />
            <span>{students} students</span>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span>{rating.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </button>
  );
};

export default FeaturedCourse;