import Atom from "../../assets/icons/atom 1.svg";
import Group from "../../assets/icons/Group.svg";
import Header from "../Header/Header";
import Pi from "../../assets/icons/number-pi 1.svg";
import React from "react";
import Sidebar from "../Sidebar";
import dashboard from "../../assets/icons/tabler-icon-layout-dashboard.svg";
import reporticon from "../../assets/icons/tabler-icon-chart-pie.svg";
import subjecticon from "../../assets/icons/tabler-icon-notes.svg";
import { useNavigate } from "react-router-dom";
const English = () => {
 const navigate= useNavigate();
  return (
    <div>
      <Header />
      <div className="subject-container">
      <Sidebar/>
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
              <li onClick={() => navigate("/grammar")}>
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
