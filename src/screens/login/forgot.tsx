import React from "react";

function ForgotPassword({ setPage }: any) {
  return (
    <div>
      <div className="login-form-root">
        <div className="form-title">Forgot Password?</div>
        <div className="form-note">
          Enter your email to reset your password.
        </div>
        <div className="forgot-password-form">
          <div className="form-input">
            <label>Email Address</label>
            <input type="email" />
          </div>
          <button className="form-button">Continue</button>
          <p className="form-link" onClick={() => setPage("Login")}>
            Sign in
          </p>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
