import React from 'react';
import { GraduationCap } from 'lucide-react';

const Header = () => {
  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center mb-4">
        <GraduationCap className="h-8 w-8 text-blue-600" />
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white ml-2">LionsEdgeX University</h1>
      </div>
      <p className="text-gray-600 dark:text-gray-400">
        Welcome back! Please login to access your learning dashboard.
      </p>
    </div>
  );
}

export default Header;