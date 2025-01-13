import React, { useState, useCallback } from 'react';
import Logo from './navbar/Logo';
import DesktopNav from './navbar/DesktopNav';
import MobileNav from './navbar/MobileNav';
import ProductMenu from './navigation/ProductMenu';
import LearnPortal from './navigation/LearnPortal';
import PlansPortal from './navigation/PlansPortal';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLearnPortalOpen, setIsLearnPortalOpen] = useState(() => {
    // Check if we should open the learn portal from navigation state
    const state = window.history.state?.usr;
    return state?.openLearnPortal || false;
  });
  const [isPlansPortalOpen, setIsPlansPortalOpen] = useState(false);

  const handleOpenLearnPortal = useCallback(() => {
    setIsLearnPortalOpen(true);
  }, []);

  const handleOpenPlansPortal = useCallback(() => {
    setIsPlansPortalOpen(true);
  }, []);

  return (
    <>
    <nav className="fixed w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] z-50 border-b border-gray-200/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-8">
            <Logo />
            <div className="hidden md:flex items-center">
              <ProductMenu />
            </div>
          </div>
          <DesktopNav 
            onOpenLearnPortal={handleOpenLearnPortal}
            onOpenPlansPortal={handleOpenPlansPortal}
          />
          <MobileNav 
            isOpen={isMenuOpen}
            onToggle={() => setIsMenuOpen(!isMenuOpen)}
            onOpenLearnPortal={handleOpenLearnPortal}
            onOpenPlansPortal={handleOpenPlansPortal}
          />
        </div>
      </div>
    </nav>
    <LearnPortal 
      isOpen={isLearnPortalOpen}
      onClose={() => setIsLearnPortalOpen(false)}
    />
    <PlansPortal
      isOpen={isPlansPortalOpen}
      onClose={() => setIsPlansPortalOpen(false)}
    />
    </>
  );
};

export default Navbar;