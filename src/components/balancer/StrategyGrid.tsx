import React from 'react';
import { Heart, Brain, Coins, Users, Target } from 'lucide-react';
import StrategyCard from './StrategyCard';

const strategies = [
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Physical Wellbeing",
    description: "Optimize your health, energy, and physical performance through proven wellness strategies."
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: "Mental Mastery",
    description: "Develop unshakeable mental strength and emotional intelligence."
  },
  {
    icon: <Coins className="h-8 w-8" />,
    title: "Financial Freedom",
    description: "Create sustainable wealth and achieve true financial independence."
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Relationship Excellence",
    description: "Build and nurture meaningful relationships in all areas of life."
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Purpose & Legacy",
    description: "Define and achieve your life's mission while creating lasting impact."
  }
];

const StrategyGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
        5 Core Life-Mastery Strategies
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {strategies.map((strategy, index) => (
          <StrategyCard key={index} {...strategy} />
        ))}
      </div>
    </div>
  );
};

export default StrategyGrid;