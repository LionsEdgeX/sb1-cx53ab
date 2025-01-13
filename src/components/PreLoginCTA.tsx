import React from 'react';
import { GraduationCap } from 'lucide-react';

const PreLoginCTA = () => {
  return (
    <div className="text-center mb-16">
      <div className="flex justify-center mb-6">
        <GraduationCap className="h-16 w-16 text-gold" />
      </div>
      <h2 className="text-5xl font-bold text-white mb-4">
        Make it an Awesome Year'
        <br />
        from the Start
      </h2>
      <p className="text-2xl text-gold">
        Join our Community today and have no regrets
      </p>
    </div>
  );
};

export default PreLoginCTA;