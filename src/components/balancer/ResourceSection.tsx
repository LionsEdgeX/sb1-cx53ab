import React from 'react';
import { CheckCircle, Trophy, FileText, Video } from 'lucide-react';
import ResourceCard from './ResourceCard';

const resources = [
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: "Strategy Checklists",
    description: "Daily, weekly, and monthly checklists to keep you on track"
  },
  {
    icon: <Trophy className="h-6 w-6" />,
    title: "30-Day Challenges",
    description: "Structured challenges to build powerful habits"
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Action Blueprints",
    description: "Step-by-step guides for implementing each strategy"
  },
  {
    icon: <Video className="h-6 w-6" />,
    title: "Live Coaching",
    description: "Weekly group coaching sessions with experts"
  }
];

const ResourceSection = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800/50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
          Exclusive Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <ResourceCard key={index} {...resource} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourceSection;