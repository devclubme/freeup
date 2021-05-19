import React from 'react';
import freelance from 'assets/freelancePanel.png';
import q from 'assets/q&a.png';
import workshop from 'assets/workshop.png';
import './period.scss';
const Period = () => {
  return (
    <div className="period">
      <div className="wrapper">
        <div className="topContent">
          <div className="topLeft">
            <h1 className="title">Kada se FreeUP održava?</h1>
            <p className="description">
              Tokom juna mjeseca imaćeš priliku da prisustvuješ na 5 online
              događaja i to:
            </p>
          </div>
          <div className="topRight">
            <div className="date">02.6 - 23.6</div>
            <div className="rectangle-left" />
            <div className="rectangle-middle" />
            <div className="rectangle-right" />
          </div>
        </div>
        <div className="bottomContent">
          <div className="bottomColumn">
            <div className="iconWrapper">
              <img src={freelance} alt="Freelance Panel" className="icon" />
            </div>
            <div className="content">
              <h3 className="title">Frilenserski Panel</h3>
              <p className="description">
                Kao uvod u FreeUp, na panelu će govoriti 5 frilensera iz
                različitih oblasti. Publika će tokom panela imati priliku da
                postavlja pitanja. Panel je otvoren za sve zainteresovane.
              </p>
            </div>
            <ul className="eventDetails">
              <div className="eventItemWrapper">
                <li className="eventItem">
                  <div className="when">
                    <span>Kada:</span> 16.06. u 18:00 - 20:00h
                  </div>
                  <div className="where">
                    <span>Gdje:</span>Zoom/Slack
                  </div>
                </li>
              </div>
            </ul>
          </div>
          <div className="bottomColumn">
            <div className="iconWrapper">
              <img src={workshop} alt="Workshop" className="icon" />
            </div>
            <div className="content">
              <h3 className="title">Radionice</h3>
              <p className="description">
                Cilj radionice je da priblizi frilens platforme poput Upwork-a
                ciljanoj grupi. Mentori, poput Jovana Cicmila, će dati konkretne
                savjete kako da izgrade svoje profile i usluge kao konkurentne
                na globalnom tržištu. Radionice su otvorene samo za registrovane
                učesnike.
              </p>
            </div>
            <ul className="eventDetails">
              <div className="eventItemWrapper">
                <li className="eventItem">
                  <div className="eventName">I Radionica</div>
                  <div className="when">
                    <span>Kada:</span> 09.06. u 18:00 - 20:00h
                  </div>
                  <div className="where">
                    <span>Gdje:</span> Zoom/Slack
                  </div>
                </li>
              </div>
              <div className="eventItemWrapper">
                <li className="eventItem">
                  <div className="eventName">II Radionica</div>
                  <div className="when">
                    <span>Kada:</span> 16.06. u 18:00 - 20:00h
                  </div>
                  <div className="where">
                    <span>Gdje:</span> Zoom/Slack
                  </div>
                </li>
              </div>
            </ul>
          </div>
          <div className="bottomColumn">
            <div className="iconWrapper">
              <img src={q} alt="Questions & Answers" className="icon" />
            </div>
            <div className="content">
              <h3 className="title">Q&A Sesija</h3>
              <p className="description">
                Imaš dodatna pitanja? Nema problema! Na Q&A spremno odgovaramo
                na sve tvoje nedoumice i predstavljamo najbolja rješenja za
                probleme iz prakse prilikom registracije na konkretnu platformu,
                pronalaženje klijenata, pisanja motivacionog pisma i sličnih
                nedaća koje nas zateknu na početku.
              </p>
            </div>
            <ul className="eventDetails">
              <div className="eventItemWrapper">
                <li className="eventItem">
                  <div className="when">
                    <span>Kada:</span> 23.06. u 18:00 - 20:00h
                  </div>
                  <div className="where">
                    <span>Gdje:</span> Slack
                  </div>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Period;
