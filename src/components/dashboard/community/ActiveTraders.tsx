import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { Users, MessageSquare } from 'lucide-react';
import toast from 'react-hot-toast';

const traders = [
  {
    name: "John Smith",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    status: "Trading BTC/USDT",
    online: true
  },
  {
    name: "Emma Watson",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    status: "Analyzing charts",
    online: true
  },
  {
    name: "Michael Scott",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    status: "Available for chat",
    online: true
  },
  {
    name: "Sarah Chen",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    status: "In a meeting",
    online: false
  }
];

const ActiveTraders = () => {
  const { isDarkMode } = useTheme();
  const [chatRequests, setChatRequests] = React.useState<string[]>([]);

  const handleChatRequest = (name: string, online: boolean) => {
    if (!online) {
      toast.error(`${name} is currently offline`);
      return;
    }

    if (chatRequests.includes(name)) {
      toast('Chat request already sent', { icon: '💬' });
      return;
    }

    setChatRequests(prev => [...prev, name]);
    toast.success(`Chat request sent to ${name}`);
  };

  return (
    <div className={`p-6 rounded-2xl ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    } border border-gray-200 dark:border-gray-700`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className={`text-lg font-bold ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Online Traders
        </h2>
        <Users className="h-5 w-5 text-gold" />
      </div>

      <div className="space-y-4">
        {traders.map((trader, index) => (
          <div
            key={index}
            className={`flex items-center justify-between p-3 rounded-xl ${
              isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
            } hover:bg-gold/10 transition-colors group`}
          >
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img
                  src={trader.avatar}
                  alt={trader.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 ${
                  isDarkMode ? 'border-gray-700' : 'border-gray-50'
                } ${
                  trader.online ? 'bg-emerald-500' : 'bg-gray-400'
                }`} />
              </div>
              <div>
                <h3 className={`font-medium ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {trader.name}
                </h3>
                <p className={`text-sm ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {trader.status}
                </p>
              </div>
            </div>
            <button 
              onClick={() => handleChatRequest(trader.name, trader.online)}
              disabled={chatRequests.includes(trader.name)}
              className={`p-2 rounded-lg transition-colors ${
                chatRequests.includes(trader.name)
                  ? 'text-gold bg-gold/20'
                  : `${isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-200'} group-hover:text-gold`
              }`}
            >
              <MessageSquare className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveTraders;