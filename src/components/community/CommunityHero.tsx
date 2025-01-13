import React from 'react';
import { Users, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CommunityHero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80"
          alt="Community"
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
            <Users className="h-8 w-8 text-gold" />
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Welcome to the <span className="text-gold">LionsEdgeX</span> Community
        </h1>
        <p className="text-xl text-royal-light max-w-3xl mx-auto mb-8">
          Join a thriving network of ambitious traders and investors committed to growth,
          success, and mutual support
        </p>
        <button className="bg-gold hover:bg-gold-light text-royal-dark px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
          Join the Pride Today
        </button>
      </div>
    </div>
  );
};

export default CommunityHero;