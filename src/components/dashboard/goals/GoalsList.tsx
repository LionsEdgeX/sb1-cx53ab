import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { Target, TrendingUp, BookOpen, Users, BarChart2 } from 'lucide-react';

const goals = [
  {
    id: 1,
    title: "Achieve 70% Win Rate",
    description: "Maintain a consistent win rate across all trades",
    category: "Performance",
    progress: 85,
    dueDate: "2024-02-28",
    icon: <TrendingUp className="h-5 w-5 text-emerald-500" />,
    status: "on_track"
  },
  {
    id: 2,
    title: "Complete Advanced Technical Analysis Course",
    description: "Master advanced chart patterns and indicators",
    category: "Education",
    progress: 60,
    dueDate: "2024-03-15",
    icon: <BookOpen className="h-5 w-5 text-blue-500" />,
    status: "in_progress"
  },
  {
    id: 3,
    title: "Risk Management Mastery",
    description: "Implement proper position sizing and risk controls",
    category: "Risk Management",
    progress: 40,
    dueDate: "2024-04-01",
    icon: <Target className="h-5 w-5 text-purple-500" />,
    status: "needs_attention"
  },
  {
    id: 4,
    title: "Build Trading Community Network",
    description: "Connect with 50 active traders",
    category: "Community",
    progress: 75,
    dueDate: "2024-03-30",
    icon: <Users className="h-5 w-5 text-gold" />,
    status: "on_track"
  },
  {
    id: 5,
    title: "Develop Custom Trading Strategy",
    description: "Create and backtest a unique trading system",
    category: "Strategy",
    progress: 25,
    dueDate: "2024-05-15",
    icon: <BarChart2 className="h-5 w-5 text-red-500" />,
    status: "in_progress"
  }
];

const GoalsList = () => {
  const { isDarkMode } = useTheme();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'on_track':
        return 'text-emerald-500 bg-emerald-500/10';
      case 'in_progress':
        return 'text-blue-500 bg-blue-500/10';
      case 'needs_attention':
        return 'text-red-500 bg-red-500/10';
      default:
        return 'text-gray-500 bg-gray-500/10';
    }
  };

  const getStatusText = (status: string) => {
    return status.split('_').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  return (
    <div className="space-y-4">
      {goals.map((goal) => (
        <div
          key={goal.id}
          className={`p-6 rounded-2xl ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          } border border-gray-200 dark:border-gray-700 hover:border-gold/50 transition-colors`}
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-start space-x-4">
              <div className={`p-2 rounded-lg ${
                isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
              }`}>
                {goal.icon}
              </div>
              <div>
                <h3 className={`font-bold mb-1 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {goal.title}
                </h3>
                <p className={`text-sm ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {goal.description}
                </p>
              </div>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(goal.status)}`}>
              {getStatusText(goal.status)}
            </span>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                Progress
              </span>
              <span className={`font-medium ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {goal.progress}%
              </span>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gold rounded-full transition-all duration-500"
                style={{ width: `${goal.progress}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {goal.category}
              </span>
              <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Due: {goal.dueDate}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GoalsList;