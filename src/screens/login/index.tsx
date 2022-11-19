import React from "react";
import Logo from "../../assets/images/Group (1).png";
import ForgotPassword from "./forgot";
import LoginMain from "./login";
import "./login.css";
function Login() {
  return (
    <div className="login-root">
      <div className="login-nav-root">
        <img src={Logo} className="login-nav-logo" />
        <div className="login-nav-contact">
          <div> Need Help?</div>
          <button className="login-nav-contact-button"> Contact us </button>
        </div>
      </div>
      <div>
        <ForgotPassword />
      </div>
    </div>
  );
}

export default Login;
