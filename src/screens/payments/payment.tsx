import React, { useState } from "react";

function Payment({ payment }: any) {
  const [colors, setColors] = useState([
    "#A24444",
    "#1D871D",
    "#1667C6",
    "#DE7800",
    "#874F1D",
    "#C900EA",
  ]);
  return (
    <div className="payments-table">
      <div>{payment.time}</div>
      <div className="user-name">
        <div
          style={{
            width: "24px",
            height: " 24px",
            background: `${colors[Math.floor(Math.random() * 6)]}`,
            borderRadius: "50%",
            fontSize: "0.6rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            marginRight: "5px",
          }}
        >
          {payment?.name?.charAt()}
        </div>
        {payment.name}
      </div>
      <div>{payment.desc}</div>
      <div>{payment.amount}</div>
      <div
        style={{
          height: "28px",
          width: "99px",
          color: (payment.type === "debit" && "#E07900") || "#368E00",
          background: payment.type === "debit" ? "#FDEDD9" : "#EFFFE6",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "0.75rem",
          borderRadius: "4px",
        }}
      >
        {payment.type}
      </div>
    </div>
  );
}

export default Payment;
