import React, { useState } from 'react';
import { Lock, ArrowRight } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const LoginPrompt = () => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const { isDarkMode } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code === 'LNX-BBP') {
      // Handle successful login
      setError('');
      alert('Access granted! Redirecting to resources...');
    } else {
      setError('Invalid access code. Please try again.');
    }
  };

  return (
    <div className="py-16 px-4">
      <div className="max-w-md mx-auto text-center">
        <Lock className="h-12 w-12 text-blue-500 mx-auto mb-6" />
        <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Access Premium Resources
        </h2>
        <p className={`mb-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Enter your special access code to unlock all resources and live coaching sessions
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter access code"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
          >
            <span>Access Resources</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPrompt;