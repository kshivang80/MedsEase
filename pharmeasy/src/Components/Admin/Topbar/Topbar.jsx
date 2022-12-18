import React from "react";
import "./Topbar.css";
import { MdNotificationsNone, MdLanguage, MdSettings } from "react-icons/md";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Hello, Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <MdNotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <MdLanguage />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <MdSettings />
          </div>
          <img
            src="https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="Avatar"
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
