import React, { useState } from "react";
import NavBar from "components/navbar";
import "./tracking.css";
function Tracking() {
  const [newReq, setNewReq] = useState({
    from: "45, upper ekenwa road, Benin ",
    to: "65, ringroad, lower ekenwa, Orhodua",
    user: "Benson Davies",
    status: "pending",
    distance: "300km",
    time: "45 mins",
    weight: "400kg",
    price: "₦ 5,200",
  });

  // ⃗ →

  return (
    <>
      <div>
        <NavBar active={"Payments"} />
      </div>

      <div className="tracking-root">
        <div className="title">Tracking</div>
        <div className="tracking-container">
          <div>
            <div>New Requests</div>
          </div>
          <div>kbkjbkjb</div>
          <div>kkjbkjbkjb</div>
        </div>
      </div>
    </>
  );
}

export default Tracking;
