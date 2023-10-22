import Atom from "../../assets/icons/atom 1.svg";
import Button from "../UI/Button";
import Group from "../../assets/icons/Group.svg";
import Idea from "../../assets/icons/idea 1.svg";
import Pi from "../../assets/icons/number-pi 1.svg";
import React from "react";
import dashboard from "../../assets/icons/tabler-icon-layout-dashboard.svg";
import questionicon from "../../assets/icons/conversation 1.svg";
import reporticon from "../../assets/icons/tabler-icon-chart-pie.svg";
import subjecticon from "../../assets/icons/tabler-icon-notes.svg";
const StudentSubjects = () => {
  return (
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
                <img src={questionicon} alt="" />
                <h6 className="bold">Question</h6>
              </a>
            </li>
            <li>
              <a href="/">
                <img src={reporticon} alt="" />
                <h6 className="bold">Reports</h6>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="subject-subcontainer">
        <div className="subject-heading">
          <h4 className="bold">Subjects</h4>
        </div>

        <div className="subject-code">
          <ul className="subject-list">
            <li>
              <img src={Group} alt="English Img" />
              <h5>English</h5>
            </li>
            <li>
              <img src={Pi} alt="Maths Img" />
              <h5>Math</h5>
            </li>
            <li>
              <img src={Atom} alt="Physics Img" />
              <h5>Physics</h5>
            </li>
            <li>
              <img src={Idea} alt="General Knowledge Img" />
              <h5>General Knowledge</h5>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudentSubjects;
