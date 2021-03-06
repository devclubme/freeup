const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="column">
          <a href="#hero">
            <div className="logoWrapper">
              <img src="/assets/freeup-logo.png" alt="logo" className="logo" />
            </div>
          </a>
          <div className="description">
            <a href="#hero" className="item">
              Tvoj put <br />
              ka frilensu
            </a>
            <div className="line"></div>
          </div>
        </div>
        <div className="column">
          <span className="title">Navigacija</span>
          <a href="#offer" className="item">
            Šta nudimo
            <div className="line"></div>
          </a>
          <a href="#period" className="item">
            Vrijeme održavanja
            <div className="line"></div>
          </a>
          <a href="#mentor" className="item">
            Mentori
            <div className="line"></div>
          </a>
          <a href="#reward" className="item">
            Nagrade
            <div className="line"></div>
          </a>
        </div>
        <div className="column">
          <span className="title">Organizatori</span>
          <a href="https://zurnal.devclub.me/" className="item">
            DevClub
            <div className="line"></div>
          </a>
          <a href="https://www.instagram.com/Grafostanica/" className="item">
            Grafostanica
            <div className="line"></div>
          </a>
          <a href="https://www.me.undp.org/" className="item">
            UNDP
            <div className="line"></div>
          </a>
          <a href="mailto:contact@freeup.me" className="item">
            Kontakt
            <div className="line"></div>
          </a>
        </div>
        <div className="column-logo">
          <div className="imgWrapper">
            <img src="/assets/logoSkewed.png" alt="logo" />
          </div>
        </div>
        <div className="column">
          <a href="#">
            <button className="register">Prijavi se</button>
          </a>
          <div className="date">
            <span>©2021</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
