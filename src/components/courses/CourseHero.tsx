import React from 'react';
import { Rocket, ArrowLeft } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';

const CourseHero = () => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();

  return (
    <div className="relative py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-royal-dark via-royal to-royal-dark" />
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMCAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L2c+PC9zdmc+')]" />
      </div>

      {/* Back Button */}
      <button
        onClick={() => navigate('/')}
        className="absolute top-8 left-8 z-20 flex items-center space-x-2 text-gold hover:text-gold-light transition-colors"
      >
        <ArrowLeft className="h-5 w-5" />
        <span>Back to Home</span>
      </button>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-8">
          <div className="bg-gold/20 p-3 rounded-2xl">
            <Rocket className="h-8 w-8 text-gold" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Master the Markets in 2025!
        </h1>
        <p className="text-xl text-royal-light max-w-3xl mx-auto mb-8">
          Transform your trading journey with our comprehensive collection of expert-led courses
        </p>
        <div className="relative max-w-2xl mx-auto">
          <input
            type="search"
            placeholder="Search courses..."
            className="w-full px-6 py-4 rounded-full bg-white/10 border border-gold/20 text-white placeholder-gold-light/70 focus:outline-none focus:ring-2 focus:ring-gold/30"
          />
        </div>
      </div>
    </div>
  );
};

export default CourseHero;