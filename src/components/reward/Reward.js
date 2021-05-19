import React from 'react';
import info from 'assets/info.svg';
import './reward.scss';
const Reward = () => {
  return (
    <div className="reward">
      <div className="wrapper">
        <div className="rewardCardWrapper">
          <div className="rewardCard">
            <div className="content">
              <div className="topContent">
                <h1 className="title">Nagrade čekaju one najuspješnije!</h1>
                <p className="description">
                  Naposletku, želimo da nagradimo one najupornije! Nakon kratkog
                  osvrta na FreeUP obuku, slijedi dodjela nagrada!
                </p>
              </div>
              <div className="bottomContent">
                <div className="additionalInfo">
                  <div className="infoIcon">
                    <img src={info} alt="info" className="icon" />
                  </div>
                  <div className="textInfo">
                    <span className="title">
                      Kako učesnik moze ostvariti nagradu?
                    </span>
                    <p className="description">
                      Ispunjen profil na Upwork-u, poslata prijava za posao,
                      primjer poslate prijave kao dokaz o prijavljivanju.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rewardBadgeWrapper">
            <div className="badge"></div>
            <div className="triangle"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reward;
