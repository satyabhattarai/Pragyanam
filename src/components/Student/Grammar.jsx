import Header from "../Header/Header";
import React from "react";
import Sidebar from "../Sidebar";
import dashboard from "../../assets/icons/tabler-icon-layout-dashboard.svg";
import listicon from "../../assets/icons/list.svg";
import reporticon from "../../assets/icons/tabler-icon-chart-pie.svg";
import subjecticon from "../../assets/icons/tabler-icon-notes.svg";
import { useNavigate } from "react-router-dom";
const Grammar = () => {
  const navigate = useNavigate();
  return (<>
  <Header/>
    <div className="subject-container">

      <Sidebar />
      <div className="subject-subcontainer">
        <div className="subject-toplabel">
          <label>Subjects</label>
          <span>/</span>
          <label>English</label>
          <span>/</span>
          <a href="/">Grammar</a>
        </div>
        <div className="class-heading">
          <h4 className="bold">Grammar</h4>
          <p className="text-muted">
            English is almost certainly considered as one of the most important
            subject that a subject can learn from school. Each and every one of
            us should have knowledge and learning when it comes in studying the
            English subject.
          </p>
        </div>
        <div className="subject-code">
          <ul className="subject-list">
            <li>
              <img src={listicon} alt="Grammar Img" />
              <h5>Grammar</h5>
              <p onClick={() => navigate("/modal")}>Modal 1</p>
              <p onClick={() => navigate("/teacher/questions")} className="text-muted">
                100 Questions
              </p>
            </li>
            <li>
              <img src={listicon} alt="Grammar Img" />
              <h5>Grammar</h5>
              <p>Modal 2</p>
              <p className="text-muted">100 Questions</p>
            </li>
            <li>
              <img src={listicon} alt="Grammar Img" />
              <h5>Grammar</h5>
              <p>Modal 3</p>
              <p className="text-muted">100 Questions</p>
            </li>
            <li>
              <img src={listicon} alt="Grammar Img" />
              <h5>Grammar</h5>
              <p>Modal 4</p>
              <p className="text-muted">100 Questions</p>
            </li>
            <li>
              <img src={listicon} alt="Grammar Img" />
              <h5>Grammar</h5>
              <p>Modal 5</p>
              <p className="text-muted">100 Questions</p>
            </li>
            <li>
              <img src={listicon} alt="Grammar Img" />
              <h5>Grammar</h5>
              <p className="text-muted">Modal 6</p>
              <p className="text-muted">100 Questions</p>
            </li>
            <li>
              <img src={listicon} alt="Grammar Img" />
              <h5>Grammar</h5>
              <p className="text-muted">Modal 7</p>
              <p className="text-muted">100 Questions</p>
            </li>
            <li>
              <img src={listicon} alt="Grammar Img" />
              <h5>Grammar</h5>
              <p className="text-muted">Modal 8</p>
              <p className="text-muted">100 Questions</p>
            </li>
            <li>
              <img src={listicon} alt="Grammar Img" />
              <h5>Grammar</h5>
              <p className="text-muted">Modal 9</p>
              <p className="text-muted">100 Questions</p>
            </li>
            <li>
              <img src={listicon} alt="Grammar Img" />
              <h5>Grammar</h5>
              <p>Modal 10</p>
              <p className="text-muted">100 Questions</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default Grammar;
