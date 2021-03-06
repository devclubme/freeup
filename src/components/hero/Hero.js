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
              <span>FreeUP</span> je informativna, besplatna, online obuka za
              sve mlade na početku karijere koji žele da se oprobaju kao
              frilenseri na globalnom tržištu.
            </p>
            <div className="buttonWrapper">
              <a href="#">
                <button className="register">Prijavi se</button>
              </a>
            </div>
          </div>
          <div className="right">
            <div className="imgWrapper">
              <img src="/assets/hero-avatars.png" alt="Avatars illustration" />
            </div>
          </div>
        </div>
        <div className="bottomContent">
          <div className="bottomContentWrapper">
            <div className="creators">
              <a href="https://zurnal.devclub.me/" className="devclubWrapper">
                <img
                  src="/assets/devclub.png"
                  alt="devclub"
                  className="devclub"
                />
              </a>

              <a
                href="https://www.instagram.com/Grafostanica/"
                className="grafostanicaWrapper"
              >
                <img
                  src="assets/grafostanica.png"
                  alt="grafostanica"
                  className="grafostanica"
                />
              </a>
            </div>
            <div className="sponsoredBy">Podržao</div>
            <div className="sponsor">
              <a href="https://www.me.undp.org/" className="undpWrapper">
                <img src="/assets/undp.png" alt="undp" className="undp" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
