import React from 'react';
import LoginInfo from './LoginInfo';
import LoginForm from './LoginForm';
import PreLoginCTA from '../PreLoginCTA';

const LoginContainer = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-50" />
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }} />
      </div>
      <div className="relative w-full">
        <PreLoginCTA />
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row overflow-hidden bg-white/10 dark:bg-gray-800/50 backdrop-blur-xl rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 transform hover:scale-[1.02] transition-all duration-300">
            <LoginInfo />
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-12 bg-black/20 backdrop-blur-lg">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginContainer;