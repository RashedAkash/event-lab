import React, { useContext, useState } from 'react';
import { FirebaseContext } from '../../Context/AuthContext';
import logo from '../../assets/logo (1).png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const { name } = useContext(FirebaseContext);
  return (
    <div>
      <div className="navbar pb-5">
        <div className="navbar-start">
         
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='about'>About</NavLink></li>
        <li><NavLink to='blog'>Blog</NavLink></li>
        <li><NavLink to='contact'>Contact</NavLink></li>
        
        
      </ul>
    </div>
    <NavLink to='/' className="btn btn-ghost normal-case text-xl"><img src={logo} alt="" /></NavLink>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='about'>About</NavLink></li>
        <li><NavLink to='blog'>Blog</NavLink></li>
        <li><NavLink to='contact'>Contact</NavLink></li>
      
    </ul>
  </div>
  <div className="navbar-end">
    <NavLink to='/login' className="btn bg-pink-700 text-white">Login</NavLink>
    <NavLink to='signUp' className="hidden md:block py-3 px-3 rounded-lg font-semibold ml-3 bg-pink-700 text-white">Sign up</NavLink>
    
  </div>
</div>
    </div>
  );
};

export default Navbar;