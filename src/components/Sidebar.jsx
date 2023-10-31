import React from 'react'
import dashboard from "../assets/icons/tabler-icon-layout-dashboard.svg";
import questionicon from "../assets/icons/conversation 1.svg";
import reporticon from "../assets/icons/tabler-icon-chart-pie.svg";
import subjecticon from "../assets/icons/tabler-icon-notes.svg";
import { useLocation } from "react-router-dom";
const Sidebar = () => {
   const location = useLocation();
   console.log(location.pathname);

  return (
    <div>
      <div className="sidebar">
        <div className="subject-nav-form">
          <ul className="subject-nav-list">
            <li>
              <a href="/student/subjects">
                <img src={dashboard} alt="" />
                <h6 className="bold">Dashboard</h6>
              </a>
            </li>
            <li className="active-subject">
              <a href="/student/subjects">
                <img src={subjecticon} alt="Notes Img" />
                <h6 className="bold">Subjects</h6>
              </a>
            </li>
            <li>
              <a href="/teacher/questions">
                <img src={questionicon} alt="" />
                <h6 className="bold">Question</h6>
              </a>
            </li>
            <li>
              <a href="/result">
                <img src={reporticon} alt="" />
                <h6 className="bold">Result</h6>
              </a>
            </li>
            <li>
              <a href="/report">
                <img src={reporticon} alt="" />
                <h6 className="bold">Reports</h6>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar
