import "../../css/component.css";

import React from 'react'
import Student from "../../assets/Images/student.svg"
import Teacher from "../../assets/Images/teacher.svg"
import logo from "../../assets/Images/logo.png";
import { useNavigate } from "react-router-dom";

const Choosing = () => {
  const navigate=useNavigate();
  return (
    <div className="text-center">
      <img className="choicelogo-img" src={logo} alt="pragyanam logo" />
      <h1 className="bold">Choose who are you?</h1>
      <div className="choice-container">
        <div className="choice-rect">
          <img className="choice-img" src={Student} alt="student" />
          <h2 onClick={() => navigate("/student/subjects")} className="bold">
            I'm Student
          </h2>
        </div>
        <div className="choice-rect">
          <img className="choice-img" src={Teacher} alt="teacher" />
          <h2 onClick={() => navigate("/teacher/dashboard")} className="bold">
            I'm Teacher
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Choosing
