import React from 'react';
import { GraduationCap } from 'lucide-react';

const Logo = () => (
  <div className="flex items-center">
    <GraduationCap className="h-10 w-10 text-gold dark:text-gold-light" />
    <span className="ml-2 text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-royal-DEFAULT to-royal-dark dark:from-gold dark:to-gold-light">
      LionsEdgeX
    </span>
  </div>
);

export default Logo;