import React, { useState } from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { Send, Users, Hash } from 'lucide-react';
import toast from 'react-hot-toast';

interface Message {
  id: string;
  userId: string;
  username: string;
  avatar: string;
  content: string;
  timestamp: string;
}

const ChatRoom = () => {
  const { isDarkMode } = useTheme();
  const [selectedRoom, setSelectedRoom] = useState('general');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      userId: '1',
      username: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
      content: 'Just spotted a great setup on BTC/USDT!',
      timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString()
    },
    {
      id: '2',
      userId: '2',
      username: 'Michael Scott',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
      content: 'Looking at the 4H timeframe, we might see a breakout soon.',
      timestamp: new Date(Date.now() - 1000 * 60 * 3).toISOString()
    }
  ]);

  const rooms = [
    { id: 'general', name: 'General Chat', active: 156 },
    { id: 'technical', name: 'Technical Analysis', active: 89 },
    { id: 'fundamental', name: 'Fundamental Analysis', active: 45 },
    { id: 'crypto', name: 'Crypto Trading', active: 234 },
    { id: 'forex', name: 'Forex Trading', active: 123 },
    { id: 'stocks', name: 'Stock Market', active: 167 }
  ];

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      userId: 'current-user',
      username: 'You',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
      content: message,
      timestamp: new Date().toISOString()
    };

    setMessages([...messages, newMessage]);
    setMessage('');
    toast.success('Message sent');
  };

  return (
    <div className={`rounded-xl ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    } border border-gray-200 dark:border-gray-700 overflow-hidden`}>
      <div className="grid grid-cols-4">
        {/* Chat Rooms List */}
        <div className={`p-4 border-r ${
          isDarkMode ? 'border-gray-700 bg-gray-700' : 'border-gray-200 bg-gray-50'
        }`}>
          <h3 className={`text-lg font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Chat Rooms
          </h3>
          <div className="space-y-2">
            {rooms.map((room) => (
              <button
                key={room.id}
                onClick={() => setSelectedRoom(room.id)}
                className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                  selectedRoom === room.id
                    ? 'bg-gold/20 text-gold'
                    : isDarkMode
                    ? 'text-gray-300 hover:bg-gray-600'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Hash className="h-4 w-4" />
                  <span>{room.name}</span>
                </div>
                <div className="flex items-center space-x-2 text-xs">
                  <Users className="h-3 w-3" />
                  <span>{room.active}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Messages */}
        <div className="col-span-3 flex flex-col h-[600px]">
          {/* Chat Header */}
          <div className={`p-4 border-b ${
            isDarkMode ? 'border-gray-700' : 'border-gray-200'
          }`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Hash className="h-5 w-5 text-gold" />
                <h3 className={`font-bold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {rooms.find(r => r.id === selectedRoom)?.name}
                </h3>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Users className="h-4 w-4" />
                <span>{rooms.find(r => r.id === selectedRoom)?.active} online</span>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className="flex items-start space-x-3">
                <img
                  src={msg.avatar}
                  alt={msg.username}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center space-x-2">
                    <span className={`font-medium ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {msg.username}
                    </span>
                    <span className="text-xs text-gray-400">
                      {new Date(msg.timestamp).toLocaleTimeString()}
                    </span>
                  </div>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                    {msg.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <form onSubmit={handleSend} className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className={`flex-1 px-4 py-2 rounded-lg ${
                  isDarkMode
                    ? 'bg-gray-700 text-white placeholder-gray-400 border-gray-600'
                    : 'bg-gray-100 text-gray-900 placeholder-gray-500 border-gray-200'
                } border focus:outline-none focus:ring-2 focus:ring-gold`}
              />
              <button
                type="submit"
                className="p-2 bg-gold hover:bg-gold-light text-royal-dark rounded-lg transition-colors"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;