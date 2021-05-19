import React from 'react';
import logo from 'assets/freeup-logo.png';
import logoSkewed from 'assets/logoSkewed.png';
import './footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="column">
          <a href="#hero">
            <div className="logoWrapper">
              <img src={logo} alt="logo" className="logo" />
            </div>
          </a>
          <span className="description">Tvoj put ka frilensu</span>
        </div>
        <div className="column">
          <span className="title">Navigacija</span>
          <a href="#offer" className="item">
            Šta nudimo
          </a>
          <a href="#period" className="item">
            Vrijeme održavanja
          </a>
          <a href="#mentor" className="item">
            Mentori
          </a>
          <a href="#reward" className="item">
            Nagrade
          </a>
        </div>
        <div className="column">
          <span className="title">Organizatori</span>
          <a href="#hero" className="item">
            DevClub
          </a>
          <a href="#hero" className="item">
            Grafostanica
          </a>
          <a href="#hero" className="item">
            UNDP
          </a>
        </div>
        <div className="column-logo">
          <div className="imgWrapper">
            <img src={logoSkewed} alt="logo" />
          </div>
        </div>
        <div className="column">
          <button className="register">Prijavi se</button>
          <div className="date">
            <span>©2021</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
