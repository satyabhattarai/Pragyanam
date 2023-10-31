import Button from "../UI/Button";
import React from "react";
import Sidebar from "../Sidebar";
import dashboard from "../../assets/icons/tabler-icon-layout-dashboard.svg";
import questionicon from "../../assets/icons/conversation-white.svg";
import reporticon from "../../assets/icons/tabler-icon-chart-pie.svg";
import subjecticon from "../../assets/icons/tabler-icon-notes-blue.svg";

const Question = () => {
  return (
    <div>
      <div className="subject-container">
        <Sidebar />
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
