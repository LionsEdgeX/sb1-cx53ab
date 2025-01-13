import React from 'react';
import { useNavigate } from 'react-router-dom';
import StrategyGrid from '../components/balancer/StrategyGrid';
import ResourceSection from '../components/balancer/ResourceSection';
import LoginPrompt from '../components/balancer/LoginPrompt';
import BalancerHero from '../components/balancer/BalancerHero';

const BalancerBlueprint = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <BalancerHero />
      <StrategyGrid />
      <ResourceSection />
      <LoginPrompt />
    </div>
  );
};

export default BalancerBlueprint;