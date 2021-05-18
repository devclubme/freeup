import React from 'react';
import mentor1 from 'assets/mentor1.png';
import mentor2 from 'assets/mentor2.png';
import mentor3 from 'assets/mentor3.png';
import mentor4 from 'assets/mentor4.png';
import mentors from '../../data';
import './mentor.scss';

const Mentor = () => {
  console.log(mentors);
  return (
    <div className="mentor">
      <div className="wrapper">
        <div className="topContent">
          <div className="leftTopContent">
            <div className="imgWrapper">
              <img src={mentor1} alt="illustration" />
            </div>
            <div className="imgWrapper">
              <img src={mentor2} alt="illustration" />
            </div>
            <div className="imgWrapper">
              <img src={mentor3} alt="illustration" />
            </div>
            <div className="imgWrapper">
              <img src={mentor4} alt="illustration" />
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
