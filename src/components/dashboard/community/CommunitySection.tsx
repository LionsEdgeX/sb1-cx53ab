import React, { useState } from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { Search, Filter, Users, MessageSquare, Calendar, Bell, ChevronDown } from 'lucide-react';
import CommunityFeed from './CommunityFeed';
import ActiveTraders from './ActiveTraders';
import TradingChallenges from './TradingChallenges';
import ChatRoom from './ChatRoom';
import CommunityEvents from './CommunityEvents';

type CommunityTab = 'feed' | 'chat' | 'events';

const CommunitySection = () => {
  const { isDarkMode } = useTheme();
  const [activeTab, setActiveTab] = useState<CommunityTab>('feed');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [showActiveMembers, setShowActiveMembers] = useState(true);

  const topics = [
    { id: 'all', label: 'All Topics' },
    { id: 'technical', label: 'Technical Analysis' },
    { id: 'fundamental', label: 'Fundamental Analysis' },
    { id: 'psychology', label: 'Trading Psychology' },
    { id: 'strategy', label: 'Trading Strategies' },
    { id: 'risk', label: 'Risk Management' }
  ];

  const renderMainContent = () => {
    switch (activeTab) {
      case 'chat':
        return <ChatRoom />;
      case 'events':
        return <CommunityEvents />;
      default:
        return <CommunityFeed searchQuery={searchQuery} selectedTopic={selectedTopic} />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className={`p-6 rounded-2xl ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      } border border-gray-200 dark:border-gray-700`}>
        <div className="flex items-center justify-between">
          <div>
            <h1 className={`text-2xl font-bold mb-2 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Community
            </h1>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Connect with fellow traders and share insights
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className={`absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }`} />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search community..."
                className={`pl-10 pr-4 py-2 rounded-lg ${
                  isDarkMode
                    ? 'bg-gray-700 text-white placeholder-gray-400 border-gray-600'
                    : 'bg-gray-100 text-gray-900 placeholder-gray-500 border-gray-200'
                } border focus:outline-none focus:ring-2 focus:ring-gold`}
              />
            </div>
            <button className={`flex items-center px-4 py-2 rounded-lg text-sm ${
              isDarkMode 
                ? 'bg-gray-700 text-white hover:bg-gray-600' 
                : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
            } transition-colors`}>
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </button>
            <div className="flex items-center space-x-2 px-4 py-2 bg-gold/20 rounded-lg">
              <Users className="h-5 w-5 text-gold" />
              <span className="text-gold font-medium">2.5k Online</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center space-x-6 mt-8">
          <button
            onClick={() => setActiveTab('feed')}
            className={`flex items-center space-x-2 pb-2 border-b-2 transition-colors ${
              activeTab === 'feed'
                ? 'border-gold text-gold'
                : 'border-transparent text-gray-400 hover:text-gray-300'
            }`}
          >
            <Users className="h-5 w-5" />
            <span>Feed</span>
          </button>
          <button
            onClick={() => setActiveTab('chat')}
            className={`flex items-center space-x-2 pb-2 border-b-2 transition-colors ${
              activeTab === 'chat'
                ? 'border-gold text-gold'
                : 'border-transparent text-gray-400 hover:text-gray-300'
            }`}
          >
            <MessageSquare className="h-5 w-5" />
            <span>Chat Rooms</span>
          </button>
          <button
            onClick={() => setActiveTab('events')}
            className={`flex items-center space-x-2 pb-2 border-b-2 transition-colors ${
              activeTab === 'events'
                ? 'border-gold text-gold'
                : 'border-transparent text-gray-400 hover:text-gray-300'
            }`}
          >
            <Calendar className="h-5 w-5" />
            <span>Events</span>
          </button>
          <button className="relative flex items-center space-x-2 pb-2 border-b-2 border-transparent text-gray-400 hover:text-gray-300">
            <Bell className="h-5 w-5" />
            <span>Notifications</span>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
              3
            </div>
          </button>
        </div>

        {/* Topic Filters */}
        {activeTab === 'feed' && (
          <div className="flex items-center space-x-4 mt-6 overflow-x-auto pb-2">
            {topics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => setSelectedTopic(topic.id)}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                  selectedTopic === topic.id
                    ? 'bg-gold text-royal-dark'
                    : isDarkMode
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {topic.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Feed and Chat Area */}
        <div className="lg:col-span-2 space-y-6">
          {renderMainContent()}
        </div>

        {/* Sidebar */}
        <div className="flex flex-col space-y-6">
          {/* Active Members Section */}
          <div className={`p-6 rounded-xl ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          } border border-gray-200 dark:border-gray-700`}>
            <button
              onClick={() => setShowActiveMembers(!showActiveMembers)}
              className="w-full flex items-center justify-between mb-4"
            >
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-gold" />
                <h3 className={`text-lg font-bold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Active Members
                </h3>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gold font-medium">2.5k Online</span>
                <ChevronDown className={`h-4 w-4 text-gold transition-transform ${
                  showActiveMembers ? 'rotate-180' : ''
                }`} />
              </div>
            </button>
            
            {showActiveMembers && (
              <div className="max-h-60 overflow-y-auto">
                <ActiveTraders />
              </div>
            )}
          </div>

          {/* Leaderboard Section */}
          <div className={`p-6 rounded-xl ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          } border border-gray-200 dark:border-gray-700`}>
            <h3 className={`text-lg font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Top Traders
            </h3>
            <div className="space-y-4">
              {/* Top 5 Traders */}
              {[1, 2, 3, 4, 5].map((rank) => (
                <div
                  key={rank}
                  className={`flex items-center justify-between p-3 rounded-lg ${
                    isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 flex items-center justify-center rounded-full ${
                      rank === 1 ? 'bg-gold text-royal-dark' :
                      rank === 2 ? 'bg-gray-300 text-gray-700' :
                      rank === 3 ? 'bg-amber-600 text-white' :
                      'bg-gray-100 text-gray-500'
                    } font-bold`}>
                      {rank}
                    </div>
                    <div className="flex items-center space-x-2">
                      <img
                        src={`https://images.unsplash.com/photo-${rank === 1 ? '1494790108377-be9c29b29330' : 
                             rank === 2 ? '1472099645785-5658abf4ff4e' :
                             rank === 3 ? '1500648767791-00dcc994a43e' :
                             rank === 4 ? '1438761681033-6461ffad8d80' :
                             '1472099645785-5658abf4ff4e'}?auto=format&fit=crop&q=80`}
                        alt={`Trader ${rank}`}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <p className={`text-sm font-medium ${
                          isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          {rank === 1 ? 'Sarah Chen' :
                           rank === 2 ? 'Michael Scott' :
                           rank === 3 ? 'David Kim' :
                           rank === 4 ? 'Emma Watson' :
                           'John Smith'}
                        </p>
                        <p className="text-xs text-emerald-500">
                          +{Math.floor(Math.random() * 500 + 100)}%
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-gold font-medium">
                    {Math.floor(Math.random() * 1000 + 1000)} pts
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trading Challenges Section */}
          <div className={`p-6 rounded-xl ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          } border border-gray-200 dark:border-gray-700`}>
            <h3 className={`text-lg font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Active Challenges
            </h3>
            <div className="space-y-4">
              <TradingChallenges />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;