import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import {
  MdLineStyle,
  MdTimeline,
  MdTrendingUp,
  MdPermIdentity,
  MdStorefront,
  MdAttachMoney,
  MdBarChart,
  MdMailOutline,
  MdDynamicFeed,
  MdChatBubbleOutline,
  MdWorkOutline,
  MdReport,
} from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/adminHome" className="link">
              <li className="sidebarListItem active">
                <MdLineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            <li className="sidebarListItem">
              <MdTimeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <MdTrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/adminUsers" className="link">
              <li className="sidebarListItem">
                <MdPermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/adminProducts" className="link">
              <li className="sidebarListItem">
                <MdStorefront className="sidebarIcon" />
                Products
              </li>
            </Link>
            <li className="sidebarListItem">
              <MdAttachMoney className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebarListItem">
              <MdBarChart className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MdMailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <MdDynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <MdChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MdWorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <MdTimeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <MdReport className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;