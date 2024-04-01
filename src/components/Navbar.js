import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMasksTheater } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    const loggedInStatus = JSON.parse(localStorage.getItem('isLoggedIn'));
    setIsLoggedIn(loggedInStatus);
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  return (
    <nav className="mainNav">
      <div className="leftItems">
        <NavLink to="/"><FontAwesomeIcon icon={faMasksTheater} style={{ marginRight: "6px"}} /></NavLink>
        <NavLink to="/">ANASAYFA</NavLink>
        <NavLink to="/plays">ETKİNLİKLER</NavLink>
        <NavLink to="/stages">SAHNELER</NavLink>
        <NavLink to="/aboutUs">HAKKIMIZDA</NavLink>
      </div>
      <div className="rightItems">
      {isLoggedIn ? (
          <>
            <NavLink to="/profile">PROFİL</NavLink>
            <NavLink to="/" onClick={handleLogout}>ÇIKIŞ YAP</NavLink>
          </>
        ) : (
          <>
            <NavLink to="/login">GİRİŞ YAP</NavLink>
            <NavLink to="/signup">KAYIT OL</NavLink>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
