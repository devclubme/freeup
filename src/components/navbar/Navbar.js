import React, { useState } from 'react';
import logo from 'assets/freeup-logo.png';
import './navbar.scss';

const Navbar = ({ menuOpen, setMenuOpen }) => {
  const menuItems = [
    { text: 'KADA SE FREEUP ODRŽAVA', section: 'period' },
    { text: 'MENTORI', section: 'mentor' },
    { text: 'NAGRADE', section: 'reward' },
  ];
  const [selected, setIsSelected] = useState(null);
  const handleMenuItemClick = (item) => {
    setIsSelected(item);
  };
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="logo">
          <img src={logo} alt="FreeUP logo" />
        </div>
        <div className="menu">
          <ul className="menuItems">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`menuItem ${selected === item ? 'active' : ''}`}
                onClick={() => handleMenuItemClick(item)}
              >
                <a href={`#${item.section}`}>
                  {item.text}
                  <div className="line" />
                </a>
              </li>
            ))}
          </ul>
          <div className="buttonWrapper">
            <button className="register">PRIJAVI SE</button>
          </div>
        </div>
        <div
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
