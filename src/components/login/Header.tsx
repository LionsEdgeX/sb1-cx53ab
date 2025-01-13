import React from 'react';
import { GraduationCap } from 'lucide-react';

const Header = () => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-3xl font-bold text-gold mb-4 flex items-center justify-center">
        <GraduationCap className="h-8 w-8 mr-2" />
        LionsEdgeX University
      </h1>
      <p className="text-gold text-lg">
        Welcome back! Please login to access your learning dashboard.
      </p>
    </div>
  );
};

export default Header;