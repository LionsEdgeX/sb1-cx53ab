import React from 'react';
import CoachingLoginForm from '../components/coaching/CoachingLoginForm';
import CoachingHero from '../components/coaching/CoachingHero';

const CoachingLogin = () => {
  return (
    <div className="min-h-screen flex">
      <CoachingLoginForm />
      <CoachingHero />
    </div>
  );
};

export default CoachingLogin;