import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { Trophy, Medal } from 'lucide-react';

const leaderboard = [
  {
    rank: 1,
    name: "Sarah Chen",
    points: 4850,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
  },
  {
    rank: 2,
    name: "Michael Scott",
    points: 4200,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
  },
  {
    rank: 3,
    name: "David Kim",
    points: 3950,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
  },
  {
    rank: 4,
    name: "Emma Watson",
    points: 3800,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
  },
  {
    rank: 5,
    name: "John Smith",
    points: 3650,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
  }
];

const LeaderboardSection = () => {
  const { isDarkMode } = useTheme();

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1:
        return 'text-gold';
      case 2:
        return 'text-gray-400';
      case 3:
        return 'text-amber-600';
      default:
        return isDarkMode ? 'text-gray-400' : 'text-gray-600';
    }
  };

  return (
    <div className={`p-6 rounded-2xl ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    } border border-gray-200 dark:border-gray-700`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className={`text-lg font-bold ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Top Traders
        </h2>
        <Trophy className="h-5 w-5 text-gold" />
      </div>

      <div className="space-y-4">
        {leaderboard.map((user) => (
          <div
            key={user.rank}
            className={`flex items-center justify-between p-3 rounded-xl ${
              isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 flex items-center justify-center font-bold ${getRankColor(user.rank)}`}>
                {user.rank <= 3 ? (
                  <Medal className="h-5 w-5" />
                ) : (
                  user.rank
                )}
              </div>
              <img
                src={user.avatar}
                alt={user.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className={`font-medium ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {user.name}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Trophy className="h-4 w-4 text-gold" />
              <span className="text-gold font-medium">
                {user.points}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderboardSection;