import React from 'react';
import { ArrowRight, ChevronDown, Play } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Hero = () => {
  const { isDarkMode } = useTheme();
  
  const scrollToLogin = () => {
    document.getElementById('login-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-[85vh] flex items-center justify-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-royal-dark to-gray-900 rounded-b-[150px] shadow-[0_50px_50px_-15px_rgba(0,0,0,0.3)] border-b-8 border-gray-900/50">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <img
              src="https://res.cloudinary.com/df33ug6ep/image/upload/v1736781037/Copy_of_Tapvertiser_2_rbojdt.png"
              alt="Background Logo"
              className="w-[800px] object-contain mix-blend-overlay"
            />
          </div>
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px'
          }} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left lg:max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-none">
              Trade your 9-5
              <br />
              for Freedom
              <br />
              with
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold-light to-gold"> LionsEdgeX</span>
            </h1>
            <p className="text-lg md:text-xl text-royal-light mb-8">
              Join Our Community, Master the Balance, Live the Success.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button 
                onClick={scrollToLogin}
                className="flex items-center justify-center px-8 py-4 bg-gold text-royal-dark rounded-full hover:bg-gold-light transition-all transform hover:scale-105 shadow-lg hover:shadow-xl text-lg font-bold group"
              >
                Access the LAB
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center justify-center px-8 py-4 border-2 border-gold text-gold hover:bg-gold/10 rounded-full transition-all transform hover:scale-105 text-lg font-medium"
              >
                Explore Courses
              </button>
            </div>
          </div>

          {/* Chess Piece */}
          <div className="hidden lg:block relative w-[640px] p-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <div className={`absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/50 transition-opacity duration-500 ${
                isDarkMode ? 'group-hover:bg-black/70' : 'group-hover:bg-black/60'
              } overlay`}>
                {/* Animated Play Button */}
                <button 
                  className="relative transform hover:scale-110 transition-all duration-300"
                  onClick={(e) => {
                    const video = e.currentTarget.closest('.group')?.querySelector('video');
                    if (video) {
                      video.play();
                      video.muted = false;
                      const overlay = e.currentTarget.closest('.overlay');
                      if (overlay) {
                        overlay.style.opacity = '0';
                        overlay.style.pointerEvents = 'none';
                      }
                    }
                  }}
                >
                  <div className="absolute -inset-4 bg-gold/20 rounded-full blur-lg animate-pulse" />
                  <div className="relative w-16 h-16 flex items-center justify-center bg-gold hover:bg-gold-light rounded-full shadow-[0_0_30px_rgba(255,215,0,0.5)]">
                    <Play className="h-8 w-8 text-royal-dark" />
                  </div>
                </button>
                
                {/* Playful Text with Arrow */}
                <div className="absolute bottom-32 left-1/2 -translate-x-8 transform rotate-[-15deg]">
                  <p className="font-dancing-script text-2xl text-gold">
                    Play Me!
                  </p>
                  <svg 
                    width="60" 
                    height="60" 
                    viewBox="0 0 60 60" 
                    className="absolute -bottom-8 left-12 text-gold"
                  >
                    <path 
                      d="M10,10 Q30,50 50,30" 
                      stroke="currentColor" 
                      fill="none" 
                      strokeWidth="2"
                      className="animate-draw"
                    />
                    <path 
                      d="M45,25 L50,30 L45,35" 
                      stroke="currentColor" 
                      fill="none" 
                      strokeWidth="2"
                      className="animate-draw"
                    />
                  </svg>
                </div>
              </div>
              <video 
                title="LionsEdgeX Promo Video"
                width="640" 
                height="360" 
                className="rounded-2xl"
                muted
                playsInline
                onLoadedData={(e) => {
                  e.currentTarget.currentTime = 0;
                }}
                onEnded={(e) => {
                  const overlay = e.currentTarget.closest('.group')?.querySelector('.overlay');
                  if (overlay) {
                    overlay.style.opacity = '1';
                    overlay.style.pointerEvents = 'auto';
                  }
                  e.currentTarget.currentTime = 0;
                }}
                onPause={(e) => {
                  const overlay = e.currentTarget.closest('.group')?.querySelector('.overlay');
                  if (overlay) {
                    overlay.style.opacity = '1';
                    overlay.style.pointerEvents = 'auto';
                  }
                }}
                preload="metadata"
                onLoadedData={(e) => {
                  // Reset video to start when loaded
                  e.currentTarget.currentTime = 0;
                }}
                onEnded={(e) => {
                  // Show overlay and reset video when ended
                  const overlay = e.currentTarget.closest('.group')?.querySelector('.overlay');
                  if (overlay) {
                    overlay.style.opacity = '1';
                    overlay.style.pointerEvents = 'auto';
                  }
                  e.currentTarget.currentTime = 0;
                }}
                onPause={(e) => {
                  // Show overlay when paused
                  const overlay = e.currentTarget.closest('.group')?.querySelector('.overlay');
                  if (overlay) {
                    overlay.style.opacity = '1';
                    overlay.style.pointerEvents = 'auto';
                  }
                }}
              >
                <source 
                  src="https://res.cloudinary.com/df33ug6ep/video/upload/v1736782865/invideo-ai-720_Transform_Your_Life_with_LionsEdgeX_2025-01-13_1_1_run5jg.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToLogin}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
      >
        <ChevronDown className="h-8 w-8 text-gold hover:text-gold-light transition-colors" />
      </button>
    </div>
  );
};

export default Hero;