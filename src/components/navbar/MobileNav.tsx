import React from 'react';
import { Menu, X, Users, GraduationCap, CreditCard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

interface MobileNavProps {
  isOpen: boolean;
  onToggle: () => void;
  onOpenLearnPortal: () => void;
  onOpenPlansPortal: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onToggle, onOpenLearnPortal, onOpenPlansPortal }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="md:hidden flex items-center space-x-4">
        <button
          onClick={() => navigate('/community')}
          className="p-2 rounded-full text-gold hover:text-gold-light hover:bg-gray-800/50 transition-all duration-300"
          title="Join our Community"
        >
          <Users className="h-5 w-5" />
        </button>
        <ThemeToggle />
        <button
          onClick={onToggle}
          className="text-primary-200 dark:text-primary-100"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute left-0 right-0 bg-white dark:bg-primary-200 shadow-xl rounded-b-2xl">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <NavItem onClick={() => { onOpenLearnPortal(); onToggle(); }}>
              <div className="flex items-center space-x-2">
                <GraduationCap className="h-5 w-5" />
                <span>Learn</span>
              </div>
            </NavItem>
            <NavItem onClick={() => { onOpenPlansPortal(); onToggle(); }}>
              <div className="flex items-center space-x-2">
                <CreditCard className="h-5 w-5" />
                <span>Plans</span>
              </div>
            </NavItem>
            <NavItem onClick={() => { navigate('/courses'); onToggle(); }}>
              Courses
            </NavItem>
            <NavItem onClick={() => {
              document.getElementById('login-section')?.scrollIntoView({ behavior: 'smooth' });
              onToggle();
            }}>
              Access the LAB
            </NavItem>
          </div>
        </div>
      )}
    </>
  );
};

const NavItem: React.FC<{ children: React.ReactNode; onClick: () => void }> = ({ children, onClick }) => (
  <button 
    onClick={onClick}
    className="block w-full text-left px-4 py-3 text-primary-200 dark:text-primary-100 hover:bg-primary-100 dark:hover:bg-primary-300/50 rounded-xl"
  >
    {children}
  </button>
);

export default MobileNav;