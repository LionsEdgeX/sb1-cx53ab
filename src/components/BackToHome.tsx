import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const BackToHome = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  return (
    <button
      onClick={() => navigate('/')}
      className={`absolute top-8 left-8 z-20 flex items-center space-x-2 ${
        isDarkMode ? 'text-white hover:text-blue-100' : 'text-gray-800 hover:text-blue-600'
      } transition-colors`}
    >
      <ArrowLeft className="h-5 w-5" />
      <span>Back to Home</span>
    </button>
  );
};

export default BackToHome;