import "../../css/component.css";
import "./Register.css";

import PhoneIcon from "../../assets/icons/phone.svg";
import React from 'react'
import ellipse from "../../assets/Images/Ellipse 3.png";
import girl from "../../assets/Images/Ellipse 1.png";
import logo from "../../assets/Images/logo.png";

const Register = () => {
  return (
    <div>
      <div className="register-container">
        <div className="image-container">
          <img className="ellipse" src={ellipse} alt="A girl studying" />
          <img src={girl} alt="A girl studying" />
        </div>
        <div className="form-container">
          <img className="registerlogo-img" src={logo} alt="pragyanam-logo" />
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

          <button className="register-button button button-primary">
            Register Now
          </button>

          <div className="text-center">
            <span>
              Already have an account?
             Go to   <a className="bold" href="#">
               LogIn
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register
