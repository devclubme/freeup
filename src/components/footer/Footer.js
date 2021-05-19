import React from 'react';
import logo from 'assets/freeup-logo.png';
import logoSkewed from 'assets/logoSkewed.png';
import './footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="column">
          <div className="logoWrapper">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <span className="description">Tvoj put ka frilensu</span>
        </div>
        <div className="column">
          <span className="title">Navigacija</span>
          <span className="item">Šta nudimo</span>
          <span className="item">Vrijeme održavanja</span>
          <span className="item">Mentori</span>
          <span className="item">Nagrade</span>
        </div>
        <div className="column">
          <span className="title">Organizatori</span>
          <span className="item">DevClub</span>
          <span className="item">Grafostanica</span>
          <span className="item">UNDP</span>
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
