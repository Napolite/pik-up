import userEvent from "@testing-library/user-event";
import React, { useState } from "react";

function Driver({ driver}:any) {
  const [colors, setColors] = useState([
    "#A24444",
    "#1D871D",
    "#1667C6",
    "#DE7800",
    "#874F1D",
    "#C900EA",
  ]);
  console.log(driver);
  return (
    <div className="user-details">
      <div className="driver-name">
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
          {driver.name.charAt()}
        </div>
        <div>{driver.name}</div>
      </div>
      <div className="driver-email">{driver.email}</div>
      <div className="driver-phone">{driver.phone}</div>
      <div className="driver-date">{driver.date}</div>
      <div className="driver-piks">{driver.piks}</div>
      <div className="driver-spent"> {driver.spent}</div>
      <div className="driver-status">
        <div className={driver.status === "pending" ? "pending" : "verified"}>
          {driver.status}
        </div>
      </div>
      <div className="driver-view">
        <button className="button">View</button>
      </div>
    </div>
  );
}

export default Driver;
