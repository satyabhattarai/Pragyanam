import "../../css/component.css";
import "./Register.css";

import PhoneIcon from "../../assets/icons/phone.svg";
import React from 'react'
import ellipse from "../../assets/Images/Ellipse 3.png";
import girl from "../../assets/Images/Ellipse 1.png";
import logo from "../../assets/Images/logo.png";

const Otpverification = () => {
  return (
    <div>
      <div className="register-container text-center">
        <div className="image-container">
          <img className="ellipse" src={ellipse} alt="A girl studying" />
          <img src={girl} alt="A girl studying" />
        </div>
        <div className="form-container">
          <img className="registerlogo-img otplogo-img " src={logo} alt="pragyanam-logo" />
          <span>We just send you otp code at <span className="bold">info@yourmail.com</span></span>
            <p>Please check and Enter
          code in following field to enter into system.</p>
          <div className="input-container">
            <div className="input-group">
              <input
                className="input-field text-center"
                type="text"
                placeholder="_ _ _ _ _ _"
              />
            </div>
          </div>
          <button className="register-button button button-primary">
            Verify OTP
          </button>
          <div className="text-center">
            <span>
              Didn't Receive Code? <a className="bold" href="#">
                Send Code Again
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Otpverification
