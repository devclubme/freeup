const Promoter = () => {
  return (
    <div className="promoter">
      <div className="wrapper">
        <div className="logo-cloud">
          <h2 className="title">Promotivno podržali:</h2>
          <div className="promoters">
            <div className="imgWrapper">
              <img src="/assets/fit-logo.png" alt="logo" className="logo" />
            </div>
            <div className="imgWrapper">
              <img src="/assets/elektro-logo.png" alt="logo" className="logo" />
            </div>
            <div className="imgWrapper">
              <img src="/assets/nest-logo.png" alt="logo" className="logo" />
            </div>
            <div className="imgWrapper">
              <img
                src="/assets/propeler-logo.png"
                alt="logo"
                className="logo"
              />
            </div>
            <div className="imgWrapper">
              <img src="/assets/vaso-logo.png" alt="logo" className="logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promoter;
