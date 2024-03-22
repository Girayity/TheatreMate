import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="mainNav">
      <div className="leftItems">
        <NavLink to="/">ANASAYFA</NavLink>
        <NavLink to="/plays">ETKİNLİKLER</NavLink>
        <NavLink to="/aboutUs">HAKKIMIZDA</NavLink>
      </div>
      <div className="rightItems">
        <NavLink to="/login">GİRİŞ YAP</NavLink>
        <NavLink to="/signup">KAYIT OL</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
