import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, GraduationCap } from 'lucide-react';
import FeaturedCourse from './FeaturedCourse';

const courses = [
  {
    id: 'advanced-trading',
    title: "Advanced Trading Strategies",
    description: "Master professional trading techniques with real-world market scenarios and expert guidance.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80",
    duration: "8 weeks",
    students: 1250,
    rating: 4.8,
    price: 997,
    curriculum: [
      "Market Analysis Fundamentals",
      "Advanced Chart Patterns",
      "Risk Management Strategies",
      "Position Sizing Techniques",
      "Trading Psychology Mastery"
    ],
    benefits: [
      "Live Trading Sessions",
      "Expert Mentorship",
      "Trading Community Access",
      "Strategy Templates",
      "Lifetime Updates"
    ]
  },
  {
    id: 'risk-management',
    title: "Financial Risk Management",
    description: "Learn to identify, assess, and mitigate financial risks in today's dynamic market environment.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    duration: "10 weeks",
    students: 980,
    rating: 4.7,
    price: 797,
    curriculum: [
      "Risk Assessment Techniques",
      "Portfolio Management",
      "Hedging Strategies",
      "Risk Metrics & Analysis",
      "Crisis Management"
    ],
    benefits: [
      "Real Case Studies",
      "Risk Analysis Tools",
      "Professional Certification",
      "Industry Expert Sessions",
      "Practice Assignments"
    ]
  },
  {
    id: 'market-analysis',
    title: "Market Analysis Fundamentals",
    description: "Develop essential skills in technical and fundamental analysis for better trading decisions.",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80",
    duration: "6 weeks",
    students: 1500,
    rating: 4.9,
    price: 597,
    curriculum: [
      "Technical Analysis Basics",
      "Fundamental Analysis",
      "Market Indicators",
      "Price Action Trading",
      "Trading Setups"
    ],
    benefits: [
      "Interactive Learning",
      "Practice Exercises",
      "Market Analysis Tools",
      "Trading Community",
      "Certificate of Completion"
    ]
  }
];

const FeaturedCourses = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-primary-50 dark:bg-primary-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-primary-200 dark:text-white mb-2">
              Featured Courses
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Master the markets with our expert-led courses
            </p>
          </div>
          <button
            onClick={() => navigate('/courses')}
            className="flex items-center space-x-2 px-6 py-3 bg-gold hover:bg-gold-light text-royal-dark rounded-lg transition-colors"
          >
            <GraduationCap className="h-5 w-5" />
            <span>View All Courses</span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <FeaturedCourse 
              key={course.id} 
              {...course} 
              onClick={() => navigate(`/courses/${course.id}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;