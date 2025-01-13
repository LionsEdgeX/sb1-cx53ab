import React from 'react';

const CoachingHero = () => {
  return (
    <div className="relative hidden lg:block flex-1">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
      >
        <source
          src="https://res.cloudinary.com/dj7nomqfd/video/upload/v1647117865/uploads/successful-business-team_drzql3.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70">
        <div className="absolute inset-0 flex flex-col justify-center p-12">
          <h1 className="text-4xl font-bold text-white mb-6">
            Transform Your Life Through Personal Mastery
          </h1>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full" />
              <p className="text-lg text-blue-100">Personal Development Coaching</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full" />
              <p className="text-lg text-blue-100">Life Balance Strategies</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full" />
              <p className="text-lg text-blue-100">Wealth Building Skills</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full" />
              <p className="text-lg text-blue-100">Financial Freedom Through Trading</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachingHero;