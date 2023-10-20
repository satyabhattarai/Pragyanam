import "./Navigation.css";

import { Link } from "react-router-dom";
import React from "react";

const Navigation = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link to="/">LogIn</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/register-otp">Otp-verification</Link>
        </li>
        <li>
          <Link to="/register-choice">Choose teacher-student</Link>
        </li>
        <li>
          <Link to="/teacher/dashboard">Teacher Dashboard</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
