import React from 'react';
import CourseCard from './CourseCard';

const courses = [
  {
    id: 1,
    title: "Advanced Price Action Mastery",
    description: "Master the art of reading price action and market structure",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80",
    level: "Advanced",
    duration: "8 weeks",
    rating: 4.9,
    students: 1250
  },
  {
    id: 2,
    title: "Risk Management Fundamentals",
    description: "Learn essential risk management strategies for consistent profits",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    level: "Beginner",
    duration: "4 weeks",
    rating: 4.8,
    students: 2100
  },
  {
    id: 3,
    title: "Trading Psychology Mastery",
    description: "Develop the mindset of successful traders",
    image: "https://images.unsplash.com/photo-1579226905180-636b76d96082?auto=format&fit=crop&q=80",
    level: "Intermediate",
    duration: "6 weeks",
    rating: 4.9,
    students: 1800
  }
];

const CourseGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {courses.map((course) => (
        <CourseCard key={course.id} {...course} />
      ))}
    </div>
  );
};

export default CourseGrid;