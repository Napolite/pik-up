import React from "react";

function ResetPassword({ setPage }: any) {
  return (
    <div className="login-form-root">
      <div className="form-title">Reset Password</div>
      <div className="form-note">Create your new password to continue.</div>
      <div className="login-form">
        <div className="form-input">
          <label>New Password</label>
          <input type="password" />
        </div>
        <div className="form-input">
          <label>Retype Password</label>
          <input type="password" />
        </div>
        <button className="form-button" onClick={setPage("Login")}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default ResetPassword;
