import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { ArrowRight, Target, Brain, ChartBar, Shield, Users } from 'lucide-react';

interface EvaluationIntroProps {
  onStart: () => void;
}

const EvaluationIntro: React.FC<EvaluationIntroProps> = ({ onStart }) => {
  const { isDarkMode } = useTheme();

  const benefits = [
    {
      icon: <Target className="h-6 w-6 text-emerald-500" />,
      title: "Clarity & Direction",
      description: "Gain clear insights into your current life balance and future goals"
    },
    {
      icon: <Brain className="h-6 w-6 text-blue-500" />,
      title: "Personal Growth",
      description: "Identify areas for improvement and personal development"
    },
    {
      icon: <ChartBar className="h-6 w-6 text-purple-500" />,
      title: "Progress Tracking",
      description: "Monitor your growth journey with detailed analytics"
    },
    {
      icon: <Shield className="h-6 w-6 text-gold" />,
      title: "Actionable Insights",
      description: "Receive personalized recommendations for each life pillar"
    },
    {
      icon: <Users className="h-6 w-6 text-red-500" />,
      title: "Community Support",
      description: "Share your journey with coaches and accountability partners"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto text-center">
      <h2 className={`text-3xl font-bold mb-6 ${
        isDarkMode ? 'text-white' : 'text-gray-900'
      }`}>
        Welcome to Your Self-Evaluation Journey
      </h2>
      
      <p className={`text-lg mb-12 ${
        isDarkMode ? 'text-gray-400' : 'text-gray-600'
      }`}>
        Take the first step towards mastering the 5 pillars of life success. 
        This evaluation will help you understand where you are and guide you 
        to where you want to be.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl ${
              isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
            } hover:scale-105 transition-transform`}
          >
            <div className="flex justify-center mb-4">
              {benefit.icon}
            </div>
            <h3 className={`text-lg font-bold mb-2 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {benefit.title}
            </h3>
            <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
              {benefit.description}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center space-y-4">
        <button
          onClick={onStart}
          className="flex items-center space-x-2 px-8 py-4 bg-gold hover:bg-gold-light text-royal-dark rounded-full font-bold transition-all transform hover:scale-105"
        >
          <span>Begin Your Evaluation</span>
          <ArrowRight className="h-5 w-5" />
        </button>
        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Takes approximately 15-20 minutes to complete
        </p>
      </div>
    </div>
  );
};

export default EvaluationIntro;