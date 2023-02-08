import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div data-testid="Navbar-1" className="flex py-4 px-4 sm:px-8 justify-between items-center">
    <NavLink
      to="/"
      className={({ isActive }) => (isActive ? 'invisible' : 'visible')}
    >
      <i className="fa-solid fa-left-long" />
    </NavLink>
    <h2 className="text-3xl md:text-4xl font-black">
      Coin
      <span className="text-violet-400">Tracker</span>
    </h2>
    <div className="flex justify-center items-center gap-2">
      <i className="fa-solid fa-microphone" />
      <i className="fa-solid fa-gear" />
    </div>
  </div>
);

export default Navbar;
