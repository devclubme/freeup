import React from 'react';
import avatars from 'assets/hero-avatars.png';
import devclub from 'assets/devclub.png';
import grafostanica from 'assets/grafostanica.png';
import undp from 'assets/undp.png';
import './hero.scss';

const Hero = () => {
  return (
    <div className="hero" id="hero">
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
            <div className="buttonWrapper">
              <button className="register">Prijavi se</button>
            </div>
          </div>
          <div className="right">
            <div className="imgWrapper">
              <img src={avatars} alt="Avatars illustration" />
            </div>
          </div>
        </div>
        <div className="bottomContent">
          <div className="bottomContentWrapper">
            <div className="creators">
              <div className="devclubWrapper">
                <img src={devclub} alt="devclub" className="devclub" />
              </div>
              <div className="grafostanicaWrapper">
                <img
                  src={grafostanica}
                  alt="grafostanica"
                  className="grafostanica"
                />
              </div>
            </div>
            <div className="sponsoredBy">Sponsored by</div>
            <div className="sponsor">
              <div className="undpWrapper">
                <img src={undp} alt="undp" className="undp" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
