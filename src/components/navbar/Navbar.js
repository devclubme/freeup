import React, { useState } from 'react';
import logo from 'assets/freeup-logo.png';
import './navbar.scss';

const Navbar = () => {
  const menuItems = ['KADA SE FREEUP ODRŽAVA', 'MENTORI', 'NAGRADE'];
  const [selected, setIsSelected] = useState(null);
  const handleMenuItemClick = (item) => {
    setIsSelected(item);
  };
  console.log(selected);
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
                {item}
              </li>
            ))}
          </ul>
          <button className="register">PRIJAVI SE</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
