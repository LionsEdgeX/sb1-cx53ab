import React from 'react';
import { Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FloatingCTA = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-8 right-8 z-50 animate-bounce-slow">
      <button 
        onClick={() => navigate('/community')}
        className="group flex items-center space-x-3 bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold text-royal-dark px-8 py-4 rounded-full shadow-[0_4px_14px_0_rgba(255,215,0,0.3)] hover:shadow-[0_6px_20px_0_rgba(255,215,0,0.4)] transition-all duration-300 hover:scale-105 font-bold"
      >
        <Users className="h-5 w-5 group-hover:animate-pulse" />
        <span>Join the Community</span>
      </button>
    </div>
  );
};

export default FloatingCTA;