import React from "react";

//components
import ForgotPassword from "./forgot";
import LoginMain from "./login";
import OTP from "./otp";
import ResetPassword from "./reset";

//css
import "./login.css";

//assets
import Logo from "../../assets/images/Group (1).png";

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
        <ResetPassword />
      </div>
    </div>
  );
}

export default Login;
