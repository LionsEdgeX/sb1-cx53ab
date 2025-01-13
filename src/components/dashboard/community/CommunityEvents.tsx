import React, { useState } from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { Calendar, Clock, Users, Target, Video, BookOpen, Plus, X } from 'lucide-react';
import toast from 'react-hot-toast';

interface Event {
  id: string;
  title: string;
  description: string;
  type: 'webinar' | 'workshop' | 'live_trading' | 'coaching';
  date: string;
  time: string;
  duration: string;
  host: string;
  hostAvatar: string;
  maxParticipants: number;
  currentParticipants: number;
}

const CommunityEvents = () => {
  const { isDarkMode } = useTheme();
  const [showEventForm, setShowEventForm] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [registeredEvents, setRegisteredEvents] = useState<string[]>([]);

  const events: Event[] = [
    {
      id: '1',
      title: 'Advanced Technical Analysis Workshop',
      description: 'Master chart patterns and indicators with our expert traders',
      type: 'workshop',
      date: '2024-03-15',
      time: '14:00',
      duration: '2 hours',
      host: 'Sarah Chen',
      hostAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
      maxParticipants: 50,
      currentParticipants: 32
    },
    {
      id: '2',
      title: 'Live Trading Session: Crypto Markets',
      description: 'Real-time market analysis and trading opportunities',
      type: 'live_trading',
      date: '2024-03-16',
      time: '09:30',
      duration: '1.5 hours',
      host: 'Michael Scott',
      hostAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
      maxParticipants: 100,
      currentParticipants: 78
    },
    {
      id: '3',
      title: 'Risk Management Masterclass',
      description: 'Learn professional risk management techniques',
      type: 'webinar',
      date: '2024-03-17',
      time: '15:00',
      duration: '2 hours',
      host: 'Emma Watson',
      hostAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
      maxParticipants: 75,
      currentParticipants: 45
    }
  ];

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'webinar': return <Video className="h-5 w-5 text-blue-500" />;
      case 'workshop': return <BookOpen className="h-5 w-5 text-purple-500" />;
      case 'live_trading': return <Target className="h-5 w-5 text-emerald-500" />;
      case 'coaching': return <Users className="h-5 w-5 text-gold" />;
      default: return null;
    }
  };

  const handleRegister = (event: Event) => {
    if (registeredEvents.includes(event.id)) {
      setRegisteredEvents(prev => prev.filter(id => id !== event.id));
      toast.success('Event registration cancelled');
    } else {
      setRegisteredEvents(prev => [...prev, event.id]);
      toast.success('Successfully registered for event');
      // Show event details modal
      setSelectedEvent(event);
    }
  };

  return (
    <div className="space-y-6">
      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className={`p-6 rounded-xl ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            } border border-gray-200 dark:border-gray-700 hover:border-gold/50 transition-all`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${
                  isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                }`}>
                  {getEventIcon(event.type)}
                </div>
                <div>
                  <h3 className={`font-bold ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {event.title}
                  </h3>
                  <p className={`text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {event.description}
                  </p>
                </div>
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                event.currentParticipants >= event.maxParticipants
                  ? 'bg-red-500/10 text-red-500'
                  : 'bg-emerald-500/10 text-emerald-500'
              }`}>
                {event.currentParticipants}/{event.maxParticipants} spots
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 text-gold mr-1" />
                  <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                    {new Date(event.date).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 text-gold mr-1" />
                  <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                    {event.time} ({event.duration})
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img
                  src={event.hostAvatar}
                  alt={event.host}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <p className={`text-sm font-medium ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {event.host}
                  </p>
                  <p className="text-xs text-gray-400">Host</p>
                </div>
              </div>
              <button
                onClick={() => handleRegister(event)}
                disabled={event.currentParticipants >= event.maxParticipants}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  registeredEvents.includes(event.id)
                    ? 'bg-red-500/10 text-red-500 hover:bg-red-500/20'
                    : event.currentParticipants >= event.maxParticipants
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-gold hover:bg-gold-light text-royal-dark'
                }`}
              >
                {registeredEvents.includes(event.id)
                  ? 'Cancel Registration'
                  : event.currentParticipants >= event.maxParticipants
                  ? 'Event Full'
                  : 'Register Now'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedEvent(null);
          }}
        >
          <div className={`w-full max-w-lg rounded-xl ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          } p-6 relative`}>
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center space-x-3 mb-6">
              <div className={`p-2 rounded-lg ${
                isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
              }`}>
                {getEventIcon(selectedEvent.type)}
              </div>
              <h3 className={`text-xl font-bold ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {selectedEvent.title}
              </h3>
            </div>

            <div className="space-y-6">
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                {selectedEvent.description}
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className={`p-4 rounded-lg ${
                  isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                }`}>
                  <div className="flex items-center space-x-2 mb-1">
                    <Calendar className="h-4 w-4 text-gold" />
                    <span className={`text-sm font-medium ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Date
                    </span>
                  </div>
                  <p className={`text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {new Date(selectedEvent.date).toLocaleDateString()}
                  </p>
                </div>

                <div className={`p-4 rounded-lg ${
                  isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                }`}>
                  <div className="flex items-center space-x-2 mb-1">
                    <Clock className="h-4 w-4 text-gold" />
                    <span className={`text-sm font-medium ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Time
                    </span>
                  </div>
                  <p className={`text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {selectedEvent.time} ({selectedEvent.duration})
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <img
                    src={selectedEvent.hostAvatar}
                    alt={selectedEvent.host}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className={`font-medium ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {selectedEvent.host}
                    </p>
                    <p className="text-sm text-gray-400">Event Host</p>
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                  selectedEvent.currentParticipants >= selectedEvent.maxParticipants
                    ? 'bg-red-500/10 text-red-500'
                    : 'bg-emerald-500/10 text-emerald-500'
                }`}>
                  {selectedEvent.currentParticipants}/{selectedEvent.maxParticipants} spots
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommunityEvents;