import React from 'react';
import { MessageSquare, Video, BookOpen, Target } from 'lucide-react';

const features = [
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: "24/7 Chat Access",
    description: "Connect with fellow traders anytime, anywhere. Share insights and get real-time support."
  },
  {
    icon: <Video className="h-8 w-8" />,
    title: "Live Trading Sessions",
    description: "Join daily live trading sessions with experienced mentors and community leaders."
  },
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: "Resource Library",
    description: "Access our extensive collection of trading guides, strategies, and educational content."
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Weekly Challenges",
    description: "Participate in trading challenges and competitions to sharpen your skills."
  }
];

const CommunityFeatures = () => {
  return (
    <div className="py-20 bg-royal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Community Benefits</h2>
          <p className="text-royal-light text-xl">Everything you need to succeed in your trading journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-royal-dark p-6 rounded-xl border border-gold/10 hover:border-gold/30 transition-all">
              <div className="text-gold mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-royal-light">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityFeatures;