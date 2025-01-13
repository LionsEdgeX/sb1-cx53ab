import React from 'react';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BalancerHero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-royal py-24">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
          alt="Success background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-royal-dark via-royal to-royal-dark/90" />
      </div>
      
      <button
        onClick={() => navigate('/')}
        className="absolute top-8 left-8 z-20 flex items-center space-x-2 text-gold hover:text-gold-light transition-colors"
      >
        <ArrowLeft className="h-5 w-5" />
        <span>Back to Home</span>
      </button>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-gold/20 p-3 rounded-2xl">
            <Sparkles className="h-8 w-8 text-gold" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          The Balancer BluePrint™
        </h1>
        <p className="text-xl text-royal-light max-w-3xl mx-auto">
          Your comprehensive guide to achieving balance and success in every aspect of life
        </p>
      </div>
    </div>
  );
};

export default BalancerHero;