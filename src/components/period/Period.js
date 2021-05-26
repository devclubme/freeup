const Period = () => {
  return (
    <div className="period" id="period">
      <div className="wrapper">
        <div className="topContent">
          <div className="topLeft">
            <h1 className="title">Kada se FreeUP održava?</h1>
            <p className="description">
              Tokom juna mjeseca imaćeš priliku da prisustvuješ na 7 online
              događaja i to:
            </p>
          </div>
          <div className="topRight">
            <div className="date">02.6 - 30.6</div>
            <div className="rectangle-left" />
            <div className="rectangle-middle" />
            <div className="rectangle-right" />
          </div>
        </div>
        <div className="bottomContent">
          <div className="bottomColumn">
            <div className="iconWrapper">
              <img
                src="/assets/freelancePanel.png"
                alt="Freelance Panel"
                className="icon"
              />
            </div>
            <div className="content">
              <h3 className="title">Priprema</h3>
              <p className="description">
                Kao uvod u FreeUP, organizujemo panel na kojem će govoriti 5
                iskusnih frilensera iz različitih oblasti o svojim iskustvima.
                Publika će tokom panela imati priliku da postavlja pitanja, a
                panel je otvoren za sve zainteresovane. Par dana kasnije slijedi
                detaljnije predstavljanje programa učesnicima, a zatim i
                zatvaranje registracija.
              </p>
            </div>
            <ul className="eventDetails">
              <div className="eventItemWrapper">
                <li className="eventItem">
                  <div className="eventName">Frilenserski panel</div>
                  <div className="when">
                    <span>Kada:</span> 2. juna u 18:00 - 20:00h
                  </div>
                  <div className="where">
                    <span>Gdje:</span> Zoom/Slack
                  </div>
                </li>
              </div>
              <div className="eventItemWrapper">
                <li className="eventItem">
                  <div className="eventName">
                    Predstavljanje FreeUP programa
                  </div>
                  <div className="when">
                    <span>Kada:</span> 7. juna u 18:00 - 19:00h
                  </div>
                  <div className="where">
                    <span>Gdje:</span> Zoom/Slack
                  </div>
                </li>
              </div>
              <div className="eventItemWrapper">
                <li className="eventItem">
                  <div className="eventName">Registracija</div>
                  <div className="where">
                    <span>Kako:</span> Sajt/Forma
                  </div>
                  <div className="when">
                    <span>Rok:</span> 8. jun 23:59
                  </div>
                </li>
              </div>
            </ul>
          </div>
          <div className="bottomColumn">
            <div className="iconWrapper">
              <img src="/assets/workshop.png" alt="Workshop" className="icon" />
            </div>
            <div className="content">
              <h3 className="title">Pozor</h3>
              <p className="description">
                Obuka se sastoji od radionica, Q&A sesija i saradnje u Slack
                grupi. Kroz radionice približićemo vam rad na frilens
                platformama poput Upwork-a. Mentori, poput Jovana Cicmila, će
                vam dati konkretne savjete kako da izgradite svoje profile i
                usluge da budu konkurentne na globalnom tržištu. Radionice i Q&A
                sesije su samo za registrovane učesnike.
              </p>
            </div>
            <ul className="eventDetails">
              <div className="eventItemWrapper">
                <li className="eventItem">
                  <div className="eventName">I Radionica</div>
                  <div className="when">
                    <span>Kada:</span> 9. juna u 18:00 - 20:00h
                  </div>
                  <div className="where">
                    <span>Gdje:</span> Zoom/Slack
                  </div>
                </li>
              </div>
              <div className="eventItemWrapper">
                <li className="eventItem">
                  <div className="eventName">I Q&A sesija</div>
                  <div className="when">
                    <span>Kada:</span> 14. juna u 18:00 - 19:00h
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
                    <span>Kada:</span> 16. juna u 18:00 - 20:00h
                  </div>
                  <div className="where">
                    <span>Gdje:</span> Zoom/Slack
                  </div>
                </li>
              </div>
              <div className="eventItemWrapper">
                <li className="eventItem">
                  <div className="eventName">II Q&A sesija</div>
                  <div className="when">
                    <span>Kada:</span> 21. juna u 18:00 - 19:00h
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
              <img
                src="/assets/lets-freelance.png"
                alt="Let's freelance"
                className="icon"
              />
            </div>
            <div className="content">
              <h3 className="title">Frilensujmo</h3>
              <p className="description">
                Na kraju dajemo ti priliku da nam pokažeš koliko želiš da budeš
                frilenser. Pokaži nam kako si usvojio savjete mentora tokom
                obuke tako što ćeš nam poslati link na kreiran profil, klijente
                koje si pronašao i prijave za posao koje si popunio. Najbolje
                ćemo nagraditi na završnom događaju.
              </p>
            </div>
            <ul className="eventDetails">
              <div className="eventItemWrapper">
                <li className="eventItem">
                  <div className="eventName">Učešće u takmičenju</div>
                  <div className="where">
                    <span>Kako:</span> Zadatak poslati na Sajt/Formu
                  </div>
                  <div className="when">
                    <span>Rok:</span> 28. jun 23:59
                  </div>
                </li>
              </div>
              <div className="eventItemWrapper">
                <li className="eventItem">
                  <div className="eventName">
                    Završni događaj i dodjela nagrada
                  </div>
                  <div className="when">
                    <span>Kada:</span> 30. juna u 18:00 - 19:00h
                  </div>
                  <div className="where">
                    <span>Gdje:</span> Zoom/Slack
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
