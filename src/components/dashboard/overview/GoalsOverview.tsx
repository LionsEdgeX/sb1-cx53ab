import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { Target, TrendingUp, BookOpen } from 'lucide-react';

const goals = [
  {
    icon: <TrendingUp className="h-5 w-5 text-emerald-500" />,
    title: "Monthly Profit Target",
    progress: 75,
    target: "$5,000",
    current: "$3,750"
  },
  {
    icon: <Target className="h-5 w-5 text-blue-500" />,
    title: "Win Rate Goal",
    progress: 85,
    target: "80%",
    current: "68%"
  },
  {
    icon: <BookOpen className="h-5 w-5 text-purple-500" />,
    title: "Course Completion",
    progress: 60,
    target: "100%",
    current: "60%"
  }
];

const GoalsOverview = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`p-6 rounded-2xl ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    } border border-gray-200 dark:border-gray-700`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className={`text-lg font-bold ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Active Goals
        </h2>
        <button className="text-sm text-gold hover:text-gold-light transition-colors">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {goals.map((goal, index) => (
          <div key={index} className={`p-4 rounded-xl ${
            isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
          }`}>
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2 rounded-lg ${
                isDarkMode ? 'bg-gray-600' : 'bg-white'
              }`}>
                {goal.icon}
              </div>
              <span className={`text-sm font-medium ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {goal.progress}%
              </span>
            </div>

            <h3 className={`text-sm font-medium mb-2 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {goal.title}
            </h3>

            <div className="mb-2 h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gold rounded-full transition-all duration-500"
                style={{ width: `${goal.progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                Current: {goal.current}
              </span>
              <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                Target: {goal.target}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoalsOverview;