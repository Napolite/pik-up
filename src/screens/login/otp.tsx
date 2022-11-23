import React from "react";

function OTP({ setPage }: any) {
  return (
    <div>
      <div className="login-form-root">
        <div className="form-title">OTP</div>
        <div className="form-note">
          Enter OTP sent to your email or phone number to proceed.
        </div>
        <div className="forgot-password-form">
          <div className="form-input">
            <label>OTP</label>
            <input type="text" />
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

export default OTP;
