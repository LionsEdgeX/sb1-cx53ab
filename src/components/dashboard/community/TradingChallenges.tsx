import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { Trophy, Users, Clock, Target, ChartBar, ArrowRight } from 'lucide-react';
import toast from 'react-hot-toast';

interface Challenge {
  id: string;
  title: string;
  description: string;
  participants: number;
  timeLeft: string;
  prize: string;
  progress: number;
  type: 'profit' | 'risk' | 'accuracy';
  target: string;
  currentValue: string;
}

const challenges: Challenge[] = [
  {
    id: '1',
    title: "Weekly Profit Challenge",
    description: "Achieve the highest profit percentage in a week",
    participants: 245,
    timeLeft: "3 days",
    prize: "5,000 Points",
    progress: 75,
    type: 'profit',
    target: '500%',
    currentValue: '375%'
  },
  {
    id: '2',
    title: "Risk Management Master",
    description: "Maintain proper position sizing for 30 consecutive trades",
    participants: 182,
    timeLeft: "5 days",
    prize: "3,000 Points",
    progress: 45,
    type: 'risk',
    target: '30 trades',
    currentValue: '14 trades'
  },
  {
    id: '3',
    title: "Perfect Entry Challenge",
    description: "Execute trades with 90% accuracy on key levels",
    participants: 156,
    timeLeft: "2 days",
    prize: "2,500 Points",
    progress: 60,
    type: 'accuracy',
    target: '90%',
    currentValue: '54%'
  }
];

const TradingChallenges = () => {
  const { isDarkMode } = useTheme();
  const [joinedChallenges, setJoinedChallenges] = React.useState<number[]>([]);

  const getChallengeIcon = (type: Challenge['type']) => {
    switch (type) {
      case 'profit': return <ChartBar className="h-5 w-5 text-emerald-500" />;
      case 'risk': return <Target className="h-5 w-5 text-purple-500" />;
      case 'accuracy': return <Trophy className="h-5 w-5 text-gold" />;
    }
  };

  const getChallengeColor = (type: Challenge['type']) => {
    switch (type) {
      case 'profit': return 'emerald';
      case 'risk': return 'purple';
      case 'accuracy': return 'gold';
    }
  };

  const handleJoinChallenge = (index: number) => {
    if (joinedChallenges.includes(index)) {
      toast.error('You are already participating in this challenge');
      return;
    }

    setJoinedChallenges(prev => [...prev, index]);
    toast.success('Successfully joined the challenge!');
  };

  return (
    <div className="space-y-6">
      {challenges.map((challenge, index) => {
        const color = getChallengeColor(challenge.type);
        return (
          <div
            key={index}
            className={`p-4 rounded-xl ${
              isDarkMode 
                ? 'bg-gray-700/50' 
                : 'bg-gray-50'
            } hover:bg-${color}-500/10 transition-all group`}
          >
            <div className="flex items-start space-x-4">
              <div className={`p-2 rounded-lg bg-${color}-500/10`}>
                {getChallengeIcon(challenge.type)}
              </div>
              
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className={`font-bold mb-1 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {challenge.title}
                    </h3>
                    <p className={`text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {challenge.description}
                    </p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium bg-${color}-500/10 text-${color}-500`}>
                    {challenge.prize}
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center text-gray-400">
                        <Users className="h-4 w-4 mr-1" />
                        <span>{challenge.participants}</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{challenge.timeLeft} left</span>
                      </div>
                    </div>
                    <div className={`text-${color}-500 font-medium`}>
                      {challenge.currentValue} / {challenge.target}
                    </div>
                  </div>

                  <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-${color}-500 rounded-full transition-all duration-500`}
                      style={{ width: `${challenge.progress}%` }}
                    />
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-end">
                  <button 
                    onClick={() => handleJoinChallenge(index)}
                    className={`flex items-center space-x-2 text-sm ${
                      joinedChallenges.includes(index)
                        ? `text-${color}-500`
                        : 'text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300'
                    } transition-colors`}
                  >
                    <span>{joinedChallenges.includes(index) ? 'View Progress' : 'Join Challenge'}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TradingChallenges;