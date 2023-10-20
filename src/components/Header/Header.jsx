import "../../css/component.css";
import "./Header.css";

import Avatar from "../../assets/icons/avatar.svg"
import DownArrowIcon from "../../assets/icons/Down Arrow.svg"
import NotificationIcon from "../../assets/icons/notification.svg";
import React from "react";
import Search from "../../assets/icons/Search.svg";
import logo from "../../assets/Images/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <div>
      <img src={logo} alt="Pragyanam Logo" />
      </div>

      <div className="input-container">
        <div className="input-group">
          <input
            className="input-field"
            type="text"
            placeholder="Search"
          />
          <div class="icon-suffix">
          <img src={Search} alt="Seacrh Icon"/>
           </div>
        </div>
      </div>
      <div className="nav-right">
 <img src={NotificationIcon} alt="Notification Icon" />
      <div className="nav-user">
      <img src={Avatar} alt="Your Avatar" />
      <span>John Doe</span>
      <img src={DownArrowIcon} alt="Category" />
      </div>
      </div>
    </div>
  );
};

export default Header;
