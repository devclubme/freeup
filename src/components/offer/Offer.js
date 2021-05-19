import React from 'react';
import arrow from 'assets/arrow.svg';
import './offer.scss';
const Offer = () => {
  return (
    <div className="offer" id="offer">
      <div className="wrapper">
        <div className="leftContent">
          <h1 className="title">Vrijeme je da se oprobaš kao frilenser</h1>
          <p className="description">
            Nudimo ti besplatnu obuku od 5 povezanih događaja gdje će
            srednjoškolci i studenti čuti iskustva u praksi direktno od iskusnih
            lokalnih frilensera.
          </p>
        </div>
        <div className="rightContent">
          <div className="panelWrapper">
            <div className="panel">
              <h3 className="panelTitle">Ova obuka je za tebe ukoliko:</h3>
              <ul className="panelList">
                <li className="panelListItem">
                  • Frilens ti je uvijek bio privlačan, ali se pitaš odakle
                  početi?
                </li>
                <li className="panelListItem">
                  • Imaš neko iskustvo u frilensu, ali želiš naučiti kako da
                  budeš konkurentan/a na inostranom tržištu.
                </li>
                <li className="panelListItem">
                  • Želiš čuti iskustva ljudi koji se već dugo bave frilensom.
                </li>
                <li className="panelListItem">
                  • Potreban ti je konkretan savjet i usmjerenje za frilens
                </li>
              </ul>
            </div>
            <div className="arrowWrapper">
              <img src={arrow} alt="arrow" className="arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
