import React from "react";

function LoginMain() {
  return (
    <div className="login-form-root">
      <div className="form-title">Sign in to your account</div>
      <div className="form-note">
        Input your email and password to get access to your account
      </div>
      <div className="login-form">
        <div className="form-input">
          <label>Email Address</label>
          <input type="text" />
        </div>
        <div className="form-input">
          <label>Password</label>
          <input type="password" />
        </div>
        <button className="form-button">Submit</button>
        <p className="form-link">Forgot password</p>
      </div>
    </div>
  );
}

export default LoginMain;