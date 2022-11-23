import React, { useState } from "react";
import "./users.css";

function NewUsers({ user, view }: any) {
  const [colors, setColors] = useState([
    "#A24444",
    "#1D871D",
    "#1667C6",
    "#DE7800",
    "#874F1D",
    "#C900EA",
  ]);
  return (
    <div className="user-details">
      <div className="user-name">
        <div
          style={{
            width: "24px",
            height: " 24px",
            background: `${colors[Math.floor(Math.random() * 6)]}`,
            borderRadius: "50%",
            fontSize: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            marginRight: "5px",
          }}
        >
          {user.name.charAt()}
        </div>
        <div>{user.name}</div>
      </div>
      <div className="user-email">{user.email}</div>
      <div className="user-phone">{user.phone}</div>
      <div className="user-date">{user.date}</div>
      <div className="user-piks">{user.piks}</div>
      <div className="user-spent"> {user.spent}</div>
      <div className="user-view">
        <button className="button" onClick={() => view(true)}>
          View
        </button>
      </div>
    </div>
  );
}

export default NewUsers;
