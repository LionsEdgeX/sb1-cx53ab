import React from 'react';

interface NavLinkProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ children, onClick, className = '' }) => (
  <button 
    onClick={onClick}
    className={`text-primary-200 dark:text-primary-100 hover:text-primary-300 dark:hover:text-white font-medium ${className}`}
  >
    {children}
  </button>
);

export default NavLink;