import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { Cross, Users, Coins, Heart, Star, TrendingUp } from 'lucide-react';

const pillars = [
  {
    name: 'Faith',
    icon: <Cross className="h-6 w-6" />,
    color: 'purple',
    progress: 75,
    tasks: { completed: 15, total: 20 }
  },
  {
    name: 'Family',
    icon: <Users className="h-6 w-6" />,
    color: 'blue',
    progress: 85,
    tasks: { completed: 17, total: 20 }
  },
  {
    name: 'Finance',
    icon: <Coins className="h-6 w-6" />,
    color: 'gold',
    progress: 65,
    tasks: { completed: 13, total: 20 }
  },
  {
    name: 'Fitness',
    icon: <Heart className="h-6 w-6" />,
    color: 'red',
    progress: 70,
    tasks: { completed: 14, total: 20 }
  },
  {
    name: 'Freedom',
    icon: <Star className="h-6 w-6" />,
    color: 'emerald',
    progress: 80,
    tasks: { completed: 16, total: 20 }
  }
];

const PillarProgress = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`p-6 rounded-2xl ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    } border border-gray-200 dark:border-gray-700`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className={`text-lg font-bold ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Pillar Progress
        </h2>
        <div className="flex items-center space-x-2 px-3 py-1 bg-gold/20 rounded-lg">
          <TrendingUp className="h-4 w-4 text-gold" />
          <span className="text-gold font-medium">78% Overall</span>
        </div>
      </div>

      <div className="space-y-6">
        {pillars.map((pillar) => (
          <div key={pillar.name}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg bg-${pillar.color}-500/10`}>
                  {React.cloneElement(pillar.icon as React.ReactElement, {
                    className: `text-${pillar.color}-500`
                  })}
                </div>
                <div>
                  <h3 className={`font-medium ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {pillar.name}
                  </h3>
                  <p className={`text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {pillar.tasks.completed} of {pillar.tasks.total} tasks completed
                  </p>
                </div>
              </div>
              <span className={`text-${pillar.color}-500 font-medium`}>
                {pillar.progress}%
              </span>
            </div>

            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div 
                className={`h-full bg-${pillar.color}-500 rounded-full transition-all duration-500`}
                style={{ width: `${pillar.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PillarProgress;