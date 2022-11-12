import React from "react";
import "./tab.css";

function TabInfo({ title, value, color, image }) {
  return (
    <div className="tabInfo-root">
      <div className="info">
        <div>{title}</div>
        <div>{value}</div>
      </div>
      <div
        style={{
          width: "48px",
          height: "48px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: color,
          borderRadius: "50%",
        }}
      >
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default TabInfo;
