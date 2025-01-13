import React from 'react';
import { useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { Users, GraduationCap, CreditCard } from 'lucide-react';

interface DesktopNavProps {
  onOpenLearnPortal: () => void;
  onOpenPlansPortal: () => void;
}

const DesktopNav: React.FC<DesktopNavProps> = ({ onOpenLearnPortal, onOpenPlansPortal }) => {
  const navigate = useNavigate();

  return (
    <div className="hidden md:flex items-center space-x-8">
      <button 
        onClick={onOpenLearnPortal}
        className="flex items-center space-x-2 text-royal-dark dark:text-gold hover:text-royal hover:dark:text-gold-light font-medium"
      >
        <GraduationCap className="h-5 w-5" />
        <span>Learn</span>
      </button>
      <button 
        onClick={onOpenPlansPortal}
        className="flex items-center space-x-2 text-royal-dark dark:text-gold hover:text-royal hover:dark:text-gold-light font-medium"
      >
        <CreditCard className="h-5 w-5" />
        <span>Plans</span>
      </button>
      <button 
        onClick={() => navigate('/courses')}
        className="text-royal-dark dark:text-gold hover:text-royal hover:dark:text-gold-light font-medium"
      >
        Courses
      </button>
      <button 
        onClick={() => navigate('/community')}
        className="p-2 rounded-full text-gold hover:text-gold-light hover:bg-gray-800/50 transition-all duration-300"
        title="Join our Community"
      >
        <Users className="h-5 w-5" />
      </button>
      <ThemeToggle />
      <button 
        onClick={() => document.getElementById('login-section')?.scrollIntoView({ behavior: 'smooth' })}
        className="bg-gold text-royal-dark px-8 py-3 rounded-full font-bold hover:bg-gold-light transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
      >
        Access the LAB
      </button>
    </div>
  );
};

export default DesktopNav;