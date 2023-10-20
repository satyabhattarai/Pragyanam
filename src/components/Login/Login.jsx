import "./Login.css";
import "../../css/component.css";

import LockIcon from "../../assets/icons/lock.svg";
import PhoneIcon from "../../assets/icons/phone.svg";
import React from "react";
import ellipse from "../../assets/Images/Ellipse 3.png";
import girl from "../../assets/Images/Ellipse 1.png";
import logo from "../../assets/Images/logo.png";

const Login = () => {
  return (
    <div className="login-container">
      <div className="image-container">
        <img className="ellipse" src={ellipse} alt="A girl studying" />
        <img src={girl} alt="A girl studying" />
      </div>
      <div className="form-container">
        <img className="logo-img" src={logo} alt="pragyanam-logo" />
        <div className="input-container">
          <label className="bold">Phone Number</label>
          <div className="input-group">
            <span class="icon-prefix">
              <img src={PhoneIcon} alt="Phone Number" />
            </span>
            <input
              className="input-field"
              type="text"
              placeholder="eg. 9821284737"
            />
          </div>
        </div>
        <div className="input-container">
          <label className="bold">Password</label>
          <div className="input-group">
            <span class="icon-prefix">
              <img src={LockIcon} alt="Phone Number" />
            </span>
            <input
              className="input-field"
              type="text"
              placeholder="*********"
            />
          </div>
        </div>

        <div className="form-description">
          <div>
            <input type="checkbox" className="align-middle" />
            <span className="align-middle">Keep me login</span>
          </div>
          <a href="#" className="bold">
            Forgot Password?
          </a>
        </div>

          <button className="login-button button button-primary">Sign In</button>

        <div className="text-center">
          <span>Don't have an account? <a className="bold" href="#">Register Now</a></span>
        </div>
      </div>
    </div>
  );
};

export default Login;
