import React from "react";

function LoginMain() {
  return (
    <div className="login-form-root">
      <div className="form-title">Sign in to your account</div>
      <div className="form-note">
        Input your email and password to get access to your account
      </div>
      <div className="login-form">
        <div>
          <label>Email Address</label>
          <input type="text" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" />
        </div>
        <button>Submit</button>
        <p>Forgot password</p>
      </div>
    </div>
  );
}

export default LoginMain;
