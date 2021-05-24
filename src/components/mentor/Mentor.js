import mentors from "../../data";

const Mentor = () => {
  return (
    <div className="mentor" id="mentor">
      <div className="wrapper">
        <div className="topContent">
          <div className="leftTopContent">
            <div className="imgWrapper">
              <img src="/assets/mentor1.png" alt="illustration" />
            </div>
            <div className="imgWrapper">
              <img src="/assets/mentor2.png" alt="illustration" />
            </div>
            <div className="imgWrapper">
              <img src="/assets/mentor3.png" alt="illustration" />
            </div>
            <div className="imgWrapper">
              <img src="/assets/mentor4.png" alt="illustration" />
            </div>
          </div>
          <div className="rightTopContent">
            <h1 className="title">
              Ko su mentori i učesnici frilenserskog panela?
            </h1>
          </div>
        </div>
        <div className="bottomContent">
          {mentors.map((mentor) => (
            <div key={mentor.id} className="mentor">
              <div className="imgWrapper">
                <img src={mentor.avatar} alt="avatar" className="avatar" />
              </div>
              <div className="mentorInfo">
                <span className="name">{mentor.name}</span>
                <span className="employment">{mentor.employment}</span>
                <span className="role">{mentor.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mentor;
