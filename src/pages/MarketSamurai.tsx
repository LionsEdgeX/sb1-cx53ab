import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import BackToHome from '../components/BackToHome';
import LoginForm from '../components/login/LoginForm';

const MarketSamurai = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-royal-dark' : 'bg-gradient-to-br from-royal/5 to-royal/10'}`}>
      <BackToHome />
      
      <div className="relative min-h-screen flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-royal-dark/95 via-royal/90 to-royal-dark/95" />
          
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '30px 30px'
            }} />
          </div>
        </div>

        <div className="relative w-full max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row overflow-hidden bg-royal-dark/50 backdrop-blur-xl rounded-3xl shadow-2xl border border-gold/10">
            {/* Info Section */}
            <div className="w-full lg:w-1/2 p-8 lg:p-12">
              <div className="h-full flex flex-col justify-center">
                <h1 className="text-4xl font-bold text-gold mb-6">
                  Market Samurai Trading LAB
                </h1>
                <p className="text-xl text-royal-light mb-8">
                  Access our advanced trading platform featuring:
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gold rounded-full" />
                    <p className="text-royal-light">Real-time market analysis</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gold rounded-full" />
                    <p className="text-royal-light">Advanced trading algorithms</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gold rounded-full" />
                    <p className="text-royal-light">Multi-market trading capabilities</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gold rounded-full" />
                    <p className="text-royal-light">Professional trading tools</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Login Form Section */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-12 bg-royal-dark/50 backdrop-blur-xl">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketSamurai;