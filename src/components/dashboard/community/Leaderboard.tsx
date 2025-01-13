import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { Trophy, Medal, TrendingUp } from 'lucide-react';

const traders = [
  {
    rank: 1,
    name: "Sarah Chen",
    profit: "+458.5%",
    winRate: "92%",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    points: 2850
  },
  {
    rank: 2,
    name: "Michael Scott",
    profit: "+385.2%",
    winRate: "88%",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    points: 2450
  },
  {
    rank: 3,
    name: "David Kim",
    profit: "+352.8%",
    winRate: "85%",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
    points: 2100
  },
  {
    rank: 4,
    name: "Emma Watson",
    profit: "+325.4%",
    winRate: "82%",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    points: 1950
  },
  {
    rank: 5,
    name: "John Smith",
    profit: "+298.7%",
    winRate: "80%",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    points: 1800
  }
];

const Leaderboard = () => {
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
        {traders.map((trader) => (
          <div
            key={trader.rank}
            className={`flex items-center justify-between p-4 rounded-xl ${
              isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
            } hover:bg-gold/10 transition-colors group`}
          >
            <div className="flex items-center space-x-4">
              <div className={`w-8 h-8 flex items-center justify-center font-bold ${getRankColor(trader.rank)}`}>
                {trader.rank <= 3 ? (
                  <Medal className="h-5 w-5" />
                ) : (
                  trader.rank
                )}
              </div>
              <img
                src={trader.avatar}
                alt={trader.name}
                className="w-10 h-10 rounded-full object-cover border-2 border-gold"
              />
              <div>
                <h3 className={`font-medium ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {trader.name}
                </h3>
                <div className="flex items-center space-x-2 text-sm">
                  <span className="text-emerald-500">{trader.profit}</span>
                  <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>•</span>
                  <span className="text-gold">{trader.winRate} WR</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4 text-emerald-500" />
              <span className="text-gold font-medium">
                {trader.points}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;