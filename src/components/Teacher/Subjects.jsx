import Atom from "../../assets/icons/atom 1.svg";
import Button from "../UI/Button";
import Group from "../../assets/icons/Group.svg";
import Header from "../Header/Header";
import Idea from "../../assets/icons/idea 1.svg";
import Pi from "../../assets/icons/number-pi 1.svg";
import React from "react";
import Sidebar from "../Sidebar";
import dashboard from "../../assets/icons/tabler-icon-layout-dashboard.svg";
import questionicon from "../../assets/icons/conversation 1.svg";
import reporticon from "../../assets/icons/tabler-icon-chart-pie.svg";
import subjecticon from "../../assets/icons/tabler-icon-notes.svg";
const TeacherSubjects = () => {
  return (
    <>
    <Header/>
    <div className="subject-container">
     <Sidebar/>
      <div className="subject-subcontainer">
        <div className="subject-heading">
          <h4 className="bold">Subjects</h4>
          <Button text={"Request Subject"} additionalClass={"button-primary"} />
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
    </div></>
  );
};

export default TeacherSubjects;
