import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Group (1).png";
import NotificationIcon from "../../assets/images/notifications.png";
import avatar from "../../assets/images/no image.png";
import "./navbar.css";

function NavBar({ active }: any) {
  return (
    <div className="navbar-root">
      <div>
        <img src={Logo} alt="" className="nav-logo" />
      </div>
      <div className="nav-menu-parent">
        <div className="nav-menu">
          <Link to="/" className={`link ${active === "Dashboard" && "focus"}`}>
            <div>Dashboard</div>
          </Link>
          <div>Tracking</div>

          <Link to="/users" className={`link ${active === "Users" && "focus"}`}>
            <div>Users</div>
          </Link>

          <Link
            to="/drivers"
            className={`link ${active === "Drivers" && "focus"}`}
          >
            <div>Drivers&Fleets</div>
          </Link>
          <Link
            to="/payments"
            className={`link ${active === "Payments" && "focus"}`}
          >
            <div> Payments</div>
          </Link>
          <div>Promotions</div>
        </div>
      </div>
      <div className="accounts">
        <div>
          <img src={NotificationIcon} alt="" />
        </div>
        <div className="avatar-details">
          <img src={avatar} alt="" />
          <div>
            <div>Obasi Adekunle</div>
            <div>Super Admin</div>
          </div>
        </div>
        <div className="arrow-down"></div>
      </div>
    </div>
  );
}

export default NavBar;
