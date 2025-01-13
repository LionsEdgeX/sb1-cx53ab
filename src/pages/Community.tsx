import React from 'react';
import CommunityHero from '../components/community/CommunityHero';
import CommunityFeatures from '../components/community/CommunityFeatures';
import CommunityEvents from '../components/community/CommunityEvents';
import CommunityTestimonials from '../components/community/CommunityTestimonials';
import CommunityMembership from '../components/community/CommunityMembership';

const Community = () => {
  return (
    <div className="min-h-screen bg-royal-dark">
      <CommunityHero />
      <CommunityFeatures />
      <CommunityEvents />
      <CommunityTestimonials />
      <CommunityMembership />
    </div>
  );
};

export default Community;