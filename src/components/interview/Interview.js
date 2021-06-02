const Interview = () => {
  return (
    <div className="interview">
      <div className="wrapper">
        <div className="topContent">
          <div className="text">
            <h1 className="title">Prijavi se za FreeUP 2021</h1>
            <p className="description">
              FreeUP je informativna i praktična obuka za sve mlade na početku
              karijere koji žele da se oprobaju kao frilenseri na globalnom
              tržištu.
            </p>
          </div>
          <div className="cta-video">
            <iframe
              src="https://www.youtube.com/embed/P14afucL0oI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="bottomContent">
          <div className="text">
            <h2 className="title">Iskustva frilensera</h2>
            <p className="description">
              Pogledajte intervjue sa frilenserima iz Crne Gore
            </p>
          </div>
          <div className="thumbnail-list">
            <div className="thumbnail">
              <iframe
                src="https://www.youtube.com/embed/Zh7EO2JkuBk"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="thumbnail">
              <iframe
                src="https://www.youtube.com/embed/grEFfEyLLOw"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="thumbnail">
              <iframe
                width="300px"
                height="150px"
                src="https://www.youtube.com/embed/xHl_nvZAEiM"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interview;
