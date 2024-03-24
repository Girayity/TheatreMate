import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMasksTheater } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <nav className="mainNav">
      <div className="leftItems">
        <NavLink to="/sd"><FontAwesomeIcon icon={faMasksTheater} style={{ marginRight: "6px"}} /></NavLink>
        <NavLink to="/">ANASAYFA</NavLink>
        <NavLink to="/plays">ETKİNLİKLER</NavLink>
        <NavLink to="/stages">SAHNELER</NavLink>
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
