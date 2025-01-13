import React from 'react';
import { Calendar } from 'lucide-react';

const events = [
  {
    date: "March 15",
    time: "2:00 PM EST",
    title: "Market Analysis Masterclass",
    host: "John Smith",
    spots: 50
  },
  {
    date: "March 16",
    time: "11:00 AM EST",
    title: "Live Trading Session",
    host: "Sarah Johnson",
    spots: 100
  },
  {
    date: "March 17",
    time: "3:00 PM EST",
    title: "Risk Management Workshop",
    host: "Mike Williams",
    spots: 75
  }
];

const CommunityEvents = () => {
  return (
    <div className="py-20 bg-royal-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Upcoming Events</h2>
          <p className="text-royal-light text-xl">Don't miss out on these exclusive community events</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-royal p-6 rounded-xl border border-gold/10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-gold">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>{event.date} • {event.time}</span>
                </div>
                <span className="text-sm text-royal-light">{event.spots} spots left</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
              <p className="text-royal-light mb-4">Hosted by {event.host}</p>
              <button className="w-full bg-gold hover:bg-gold-light text-royal-dark py-2 rounded-lg font-medium transition-colors">
                Reserve Your Spot
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityEvents;