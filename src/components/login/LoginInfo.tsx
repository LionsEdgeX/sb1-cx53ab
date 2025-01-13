import React from 'react';

const LoginInfo = () => {
  return (
    <div className="relative hidden lg:block w-1/2 bg-royal">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-royal to-royal-dark opacity-90" />
      </div>
      
      <div className="relative h-full flex flex-col justify-center p-12 text-white">
        <h2 className="text-4xl font-bold text-gold mb-6">
          Transform your future!
        </h2>
        
        <p className="text-xl text-royal-light mb-8">
          Join our community of learners and unlock your potential with expert-led courses and industry-recognized certifications.
        </p>
        
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-gold rounded-full" />
            <p className="text-lg text-royal-light">Expert-led trading courses</p>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-gold rounded-full" />
            <p className="text-lg text-royal-light">Real-world market scenarios</p>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-gold rounded-full" />
            <p className="text-lg text-royal-light">Professional certification</p>
          </div>
        </div>

        <div className="absolute bottom-8 left-12">
          <span className="text-gold text-lg font-bold">#BOSSMOVES</span>
        </div>
      </div>
    </div>
  );
};

export default LoginInfo;