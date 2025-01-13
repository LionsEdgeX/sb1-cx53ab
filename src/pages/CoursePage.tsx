import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { 
  Clock, 
  Users, 
  Star, 
  Check,
  ArrowLeft,
  BookOpen,
  Target,
  Award,
  Play,
  X
} from 'lucide-react';

const CoursePage = () => {
  const { courseId } = useParams();
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const [showEnrollment, setShowEnrollment] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Find course data (in a real app, this would come from an API)
  const course = {
    id: courseId,
    title: "Advanced Trading Strategies",
    description: "Master professional trading techniques with real-world market scenarios and expert guidance.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80",
    video: "https://res.cloudinary.com/df33ug6ep/video/upload/v1736782865/invideo-ai-720_Transform_Your_Life_with_LionsEdgeX_2025-01-13_1_1_run5jg.mp4",
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
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Hero Section */}
      <div className="relative bg-royal-dark py-24">
        <div className="absolute inset-0">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-royal-dark via-royal to-royal-dark/90" />
        </div>

        <button
          onClick={() => navigate('/courses')}
          className="absolute top-8 left-8 z-20 flex items-center space-x-2 text-gold hover:text-gold-light transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Courses</span>
        </button>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Video Section */}
          <div className="relative w-full max-w-3xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl group">
            <div className={`absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/50 transition-opacity duration-500 ${
              isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'
            } overlay`}>
              {/* Animated Play Button */}
              <button 
                className="relative transform hover:scale-110 transition-all duration-300"
                onClick={() => {
                  const video = document.querySelector('video');
                  if (video) {
                    video.play();
                    video.muted = false;
                    setIsPlaying(true);
                  }
                }}
              >
                <div className="absolute -inset-4 bg-gold/20 rounded-full blur-lg animate-pulse" />
                <div className="relative w-16 h-16 flex items-center justify-center bg-gold hover:bg-gold-light rounded-full shadow-[0_0_30px_rgba(255,215,0,0.5)]">
                  <Play className="h-8 w-8 text-royal-dark" />
                </div>
              </button>
              
              {/* Playful Text with Arrow */}
              <div className="absolute bottom-32 left-1/2 -translate-x-8 transform rotate-[-15deg]">
                <p className="font-dancing-script text-2xl text-gold">
                  Watch Preview!
                </p>
                <svg 
                  width="60" 
                  height="60" 
                  viewBox="0 0 60 60" 
                  onClick={() => setShowEnrollment(true)}
                  onClick={() => setShowEnrollment(true)}
                  className="w-full bg-gold hover:bg-gold-light text-royal-dark py-4 rounded-lg font-bold transition-colors mb-4"
                >
                  <path 
                    d="M10,10 Q30,50 50,30" 
                    stroke="currentColor" 
                    fill="none" 
                    strokeWidth="2"
                    className="animate-draw"
                  />
                  <path 
                    d="M45,25 L50,30 L45,35" 
                    stroke="currentColor" 
                    fill="none" 
                    strokeWidth="2"
                    className="animate-draw"
                  />
                </svg>
              </div>
            </div>
            <video 
              className="w-full h-full object-cover rounded-2xl"
              muted
              playsInline
              onEnded={() => {
                setIsPlaying(false);
                const video = document.querySelector('video');
                if (video) video.currentTime = 0;
              }}
              onPause={() => setIsPlaying(false)}
            >
              <source src={course.video} type="video/mp4" />
            </video>
          </div>
          <div className="flex flex-col lg:flex-row items-start justify-between">
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-white mb-4">
                {course.title}
              </h1>
              <p className="text-xl text-royal-light mb-8 max-w-2xl">
                {course.description}
              </p>
              <div className="flex items-center space-x-6 text-royal-light">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gold mr-2" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-gold mr-2" />
                  <span>{course.students} students</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-gold fill-current mr-2" />
                  <span>{course.rating}</span>
                </div>
              </div>
            </div>
            <div className="mt-8 lg:mt-0 lg:ml-8">
              <div className={`p-8 rounded-xl ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              } shadow-xl`}>
                <div className="text-3xl font-bold text-gold mb-6">
                  ${course.price}
                </div>
                <button className="w-full bg-gold hover:bg-gold-light text-royal-dark py-4 rounded-lg font-bold transition-colors mb-4">
                  Enroll Now
                </button>
                <p className={`text-sm text-center ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  30-day money-back guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What You'll Learn */}
            <div className={`p-8 rounded-xl ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            } border border-gray-200 dark:border-gray-700`}>
              <div className="flex items-center space-x-3 mb-6">
                <BookOpen className="h-6 w-6 text-gold" />
                <h2 className={`text-2xl font-bold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  What You'll Learn
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.curriculum.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-gold mt-0.5" />
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Benefits */}
            <div className={`p-8 rounded-xl ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            } border border-gray-200 dark:border-gray-700`}>
              <div className="flex items-center space-x-3 mb-6">
                <Target className="h-6 w-6 text-gold" />
                <h2 className={`text-2xl font-bold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Course Benefits
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-gold mt-0.5" />
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Course Features */}
            <div className={`p-6 rounded-xl ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            } border border-gray-200 dark:border-gray-700`}>
              <h3 className={`text-lg font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Course Features
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-gold mr-2" />
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                      Duration
                    </span>
                  </div>
                  <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                    {course.duration}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-gold mr-2" />
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                      Enrolled
                    </span>
                  </div>
                  <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                    {course.students} students
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-gold mr-2" />
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                      Rating
                    </span>
                  </div>
                  <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                    {course.rating}/5
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-gold mr-2" />
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                      Certificate
                    </span>
                  </div>
                  <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                    Yes
                  </span>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className={`p-6 rounded-xl ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            } border border-gray-200 dark:border-gray-700`}>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-4">
                  ${course.price}
                </div>
                <button className="w-full bg-gold hover:bg-gold-light text-royal-dark py-4 rounded-lg font-bold transition-colors mb-4">
                  Enroll Now
                </button>
                <p className={`text-sm ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  30-day money-back guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enrollment Overlay */}
      {showEnrollment && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowEnrollment(false);
          }}
        >
          <div className={`w-full max-w-lg rounded-2xl ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          } p-8 relative`}>
            <button
              onClick={() => setShowEnrollment(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="text-center mb-8">
              <h2 className={`text-2xl font-bold mb-2 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Enroll in {course.title}
              </h2>
              <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                Start your journey to trading mastery today
              </p>
            </div>

            <div className="space-y-6">
              <div className={`p-4 rounded-xl ${
                isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
              }`}>
                <div className="flex justify-between items-center mb-4">
                  <span className={`font-medium ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Course Fee
                  </span>
                  <span className="text-2xl font-bold text-gold">
                    ${course.price}
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-emerald-500 mr-2" />
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                      Lifetime access to course materials
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-emerald-500 mr-2" />
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                      Live trading sessions
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-emerald-500 mr-2" />
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                      Community access
                    </span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-gold hover:bg-gold-light text-royal-dark py-4 rounded-lg font-bold transition-colors">
                Proceed to Payment
              </button>

              <p className="text-sm text-center text-gray-400">
                By enrolling, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoursePage;