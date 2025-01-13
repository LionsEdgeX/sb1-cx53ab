import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavLink from './NavLink';

const NavLinks = () => {
  const navigate = useNavigate();

  return (
    <>
      <NavLink onClick={() => navigate('/')}>
        Home
      </NavLink>
      <NavLink onClick={() => navigate('/courses')}>
        Courses
      </NavLink>
      <NavLink 
        onClick={() => document.getElementById('login-section')?.scrollIntoView({ behavior: 'smooth' })}
        className="bg-primary-200 text-white px-8 py-3 rounded-full font-medium hover:bg-primary-300 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
      >
        Access the LAB
      </NavLink>
    </>
  );
};

export default NavLinks;