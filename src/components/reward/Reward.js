const Reward = () => {
  return (
    <div className="reward" id="reward">
      <div className="wrapper">
        <div className="rewardCardWrapper">
          <div className="rewardCard">
            <div className="content">
              <div className="topContent">
                <h1 className="title">Nagrade za najuspješnije!</h1>
                <p className="description">
                  Na kraju, želimo da nagradimo one koji su se najviše
                  potrudili! Nakon kratkog osvrta na FreeUP obuku, slijedi
                  dodjela nagrada za učesnike koji su bili prisutni na svim
                  radionicama i Q&A sesijama, a koji su na najbolji način
                  usvojili savjete mentora!
                </p>
              </div>
              <div className="bottomContent">
                <div className="additionalInfo">
                  <div className="infoIcon">
                    <img src="/assets/info.svg" alt="info" className="icon" />
                  </div>
                  <div className="textInfo">
                    <span className="title">
                      Kako učesnik može konkurisati za nagradu?
                    </span>
                    <p className="description">
                      Ispunjen profil na Upwork-u ili sličnoj platformi, poslata
                      prijava za posao, primjer poslate prijave kao dokaz o
                      prijavljivanju. Dodatni poeni za one koji obezbijede
                      intervju za posao ili nađu klijenta u toku samog programa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rewardBadgeWrapper">
            <div className="badge"></div>
            <div className="border"></div>
            <div className="triangle"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reward;
