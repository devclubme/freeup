import React from 'react';
import avatars from 'assets/hero-avatars.png';
import sponsors from 'assets/sponsors.png';
import './hero.scss';

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="topContent">
          <div className="left">
            <h1 className="title">Tvoj put ka frilensu</h1>
            <p className="description">
              Ne godi svima kancelarijski vazduh i 9 do 5 radna rutina. Nekima
              bolje leži samostalan rad i širina globalnog tržišta.
              <br />
              <br />
              <span>FreeUP</span> je informativna i praktična obuka za sve mlade
              na početku karijere koji žele da se oprobaju kao frilenseri na
              globalnom tržištu.
            </p>
            <button className="register">Prijavi se</button>
          </div>
          <div className="right">
            <div className="imgWrapper">
              <img src={avatars} alt="Avatars illustration" />
            </div>
          </div>
        </div>
        <div className="bottomContent">
          <div className="sponsorsWrapper">
            <img src={sponsors} alt="sponsors" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
