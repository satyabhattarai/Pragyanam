import Button from "../UI/Button";
import React from "react";
import Sidebar from "../Sidebar";
import dashboard from "../../assets/icons/tabler-icon-layout-dashboard.svg";
import reporticon from "../../assets/icons/tabler-icon-chart-pie.svg";
import subjecticon from "../../assets/icons/tabler-icon-notes.svg";
import videoplay from "../../assets/icons/video-play.svg";
const Modal = () => {
  return (
    <div className="subject-container">
      <Sidebar/>
      <div className="subject-subcontainer">
        <div className="subject-toplabel">
          <label>Subjects</label>
          <span>/</span>
          <label>English</label>
          <span>/</span>
          <label>Grammar</label>
          <span>/</span>
          <a href="/">Modal #1</a>
        </div>
        <div className="class-heading">
          <h4 className="bold">Grammar - Modal #1</h4>
          <section className="input-section">
            <h5 className="bold">Exam Instruction to Follow</h5>
            <p className="text-muted">
              error sit voluptatem accusantium doloremque laudantium, totam
            </p>
            <ul className="list-section">
              <li>select your answer and click “Next” button to proceed</li>
              <li>Click “Previous” button to go back to previous question</li>
              <li>
                You can Navigate to any questions by clicking on the question
                number on the summary panel.
              </li>
              <li>select your answer and click “Next” button to proceed</li>
              <li>Click “Previous” button to go back to previous question</li>
              <li>
                You can Navigate to any questions by clicking on the question
                number on the summary panel.
              </li>
            </ul>
            <h5 className="bold">Instruction Videos</h5>
            <p>error sit voluptatem accusantium doloremque laudantium, totam</p>
            <div className="video-container">
              <ul className="subject-list">
                <li>
                  <img src={videoplay} alt="Video Status" />
                  <p>Instruction Video #1</p>
                </li>
                <li>
                  <img src={videoplay} alt="Video Status" />
                  <p>Instruction Video #1</p>
                </li>
              </ul>
              <Button
                text={"Start Mock Test"}
                additionalClass={"button-primary"}
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Modal;
