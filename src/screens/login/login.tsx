import React from "react";
import { useNavigate } from "react-router-dom";

function LoginMain({ setPage }: any) {
  const navigate = useNavigate();
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
          <i className="fa-solid fa-eye" id="eye"></i>
        </div>
        <button className="form-button" onClick={() => navigate("/")}>
          Submit
        </button>
        <p
          className="form-link"
          onClick={() => {
            setPage("ForgotPassword");
          }}
        >
          Forgot password
        </p>
      </div>
    </div>
  );
}

export default LoginMain;
