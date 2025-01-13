import React from 'react';
import { Crown, Coins, Gift, ArrowRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const SecondaryHero = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`relative py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-gold' : 'text-royal'} mb-4`}>
            Why LionsEdgeX?
          </h2>
          <p className={`text-xl ${isDarkMode ? 'text-royal-light' : 'text-royal/70'} max-w-3xl mx-auto`}>
            A proven track record of transforming financial struggles into success stories, 
            modeled to solve real problems of financial lack and lifestyle imbalance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Cards Container - 8 columns */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Rockstar Coaching Card */}
            <div className={`${
              isDarkMode 
                ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gold/10' 
                : 'bg-gradient-to-br from-white to-gray-50 border-royal/10'
            } p-8 rounded-2xl border shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1`}>
              <div className="flex items-center justify-center w-16 h-16 bg-gold/10 rounded-xl mb-6">
                <Crown className="h-8 w-8 text-gold" />
              </div>
              <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-royal-dark'} mb-4`}>
                LionsEdgeX Rockstar Coaching
              </h3>
              <p className={`${isDarkMode ? 'text-royal-light' : 'text-royal/70'} mb-6`}>
                Elite mentorship program designed to fast-track your success with proven strategies 
                and personalized guidance from industry experts
              </p>
              <button className={`flex items-center ${isDarkMode ? 'text-gold hover:text-gold-light' : 'text-royal hover:text-royal-dark'} transition-colors`}>
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>

            {/* Wealth Generation Card */}
            <div className={`${
              isDarkMode 
                ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gold/10' 
                : 'bg-gradient-to-br from-white to-gray-50 border-royal/10'
            } p-8 rounded-2xl border shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1`}>
              <div className="flex items-center justify-center w-16 h-16 bg-gold/10 rounded-xl mb-6">
                <Coins className="h-8 w-8 text-gold" />
              </div>
              <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-royal-dark'} mb-4`}>
                Wealth Generation Community
              </h3>
              <p className={`${isDarkMode ? 'text-royal-light' : 'text-royal/70'} mb-6`}>
                Join a thriving community of successful traders and investors sharing insights, 
                strategies, and opportunities
              </p>
              <button className={`flex items-center ${isDarkMode ? 'text-gold hover:text-gold-light' : 'text-royal hover:text-royal-dark'} transition-colors`}>
                Join Community <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Book Promotion Section - 4 columns */}
          <div className="lg:col-span-4 relative">
            <div className="absolute -top-4 right-4 z-10">
              <div className="flex items-center bg-gold text-royal-dark px-4 py-2 rounded-full shadow-lg animate-bounce">
                <Gift className="h-5 w-5 mr-2" />
                <span className="font-bold">Free Bonus - HURRY!</span>
              </div>
            </div>
            <div className={`${
              isDarkMode 
                ? 'bg-gradient-to-br from-royal to-royal-dark border-gold/10' 
                : 'bg-gradient-to-br from-royal/90 to-royal border-royal/10'
            } p-8 rounded-2xl border shadow-xl h-full`}>
              <img 
                src="https://res.cloudinary.com/df33ug6ep/image/upload/v1736781041/FREE_2_b6qibt.png" 
                alt="Free Books" 
                className="w-full rounded-lg mb-6 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-300"
              />
              <button 
                onClick={() => document.getElementById('login-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold text-royal-dark py-4 rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Claim Your Free Books Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryHero;