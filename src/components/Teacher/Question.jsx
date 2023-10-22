import Button from "../UI/Button";
import React from "react";
import dashboard from "../../assets/icons/tabler-icon-layout-dashboard.svg";
import questionicon from "../../assets/icons/conversation-white.svg";
import reporticon from "../../assets/icons/tabler-icon-chart-pie.svg";
import subjecticon from "../../assets/icons/tabler-icon-notes-blue.svg";

const Question = () => {
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
              <li>
                <a href="/">
                  <img src={subjecticon} alt="Notes Img" />
                  <h6 className="bold">Subjects</h6>
                </a>
              </li>
              <li className="active-subject">
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
            <h4 className="bold">Questions Model</h4>
            <Button text={"Add Question"} additionalClass={"button-primary"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
