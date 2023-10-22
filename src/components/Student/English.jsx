import Atom from "../../assets/icons/atom 1.svg";
import Group from "../../assets/icons/Group.svg";
import Pi from "../../assets/icons/number-pi 1.svg";
import React from "react";
import dashboard from "../../assets/icons/tabler-icon-layout-dashboard.svg";
import reporticon from "../../assets/icons/tabler-icon-chart-pie.svg";
import subjecticon from "../../assets/icons/tabler-icon-notes.svg";

const English = () => {
  return (
    <div>
      <div className="subject-container">
        <div className="sidebar">
          <div className="subject-nav-form">
            <ul className="subject-nav-list">
              <li>
                <a href="/">
                  <img src={dashboard} alt="" />
                  <h6 className="bold">Dashboard</h6>
                </a>
              </li>
              <li className="active-subject">
                <a href="/">
                  <img src={subjecticon} alt="Notes Img" />
                  <h6 className="bold">Subjects</h6>
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={reporticon} alt="" />
                  <h6 className="bold">Result</h6>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="subject-subcontainer">
          <div className="subject-toplabel">
            <label>Subjects</label>
            <span>/</span>
            <a href="/">English</a>
          </div>
          <div className="class-heading">
            <h4 className="bold">English</h4>
            <p className="text-muted">
              English is almost certainly considered as one of the most
              important subject that a subject can learn from school. Each and
              every one of us should have knowledge and learning when it comes
              in studying the English subject.
            </p>
            </div>
          <div className="subject-code">
            <ul className="subject-list">
              <li>
                <img src={Group} alt="English Img" />
                <h5>Grammar</h5>
              </li>
              <li>
                <img src={Pi} alt="Maths Img" />
                <h5>Passage Reading</h5>
              </li>
              <li>
                <img src={Atom} alt="Physics Img" />
                <h5>Eassy Writing</h5>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default English;
