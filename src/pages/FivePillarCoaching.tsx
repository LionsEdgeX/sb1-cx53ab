import React from 'react';
import { Target, Shield, Brain, BarChart, Users } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import BackToHome from '../components/BackToHome';

const FivePillarCoaching = () => {
  const { isDarkMode } = useTheme();

  const pillars = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Strategic Trading",
      description: "Master advanced trading strategies and market analysis techniques"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Risk Management",
      description: "Learn professional risk management and capital preservation"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Trading Psychology",
      description: "Develop the mindset of successful traders and overcome emotional barriers"
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Performance Analytics",
      description: "Track and analyze your trading performance with advanced metrics"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Support",
      description: "Join an elite community of traders for support and networking"
    }
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="relative bg-blue-600">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80"
            alt="Trading background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <BackToHome />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            5-Pillar Coaching™ Program
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Transform your trading journey with our comprehensive coaching program
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
            Apply Now
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl ${
                isDarkMode 
                  ? 'bg-gray-800 hover:bg-gray-700' 
                  : 'bg-white hover:bg-gray-50'
              } transition-colors shadow-lg`}
            >
              <div className="text-blue-500 mb-4">{pillar.icon}</div>
              <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {pillar.title}
              </h3>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FivePillarCoaching;