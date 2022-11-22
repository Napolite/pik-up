import React, { useState } from "react";
import NavBar from "components/navbar";
import "./tracking.css";
import NewRequests from "./newRequests";
function Tracking() {
  const [newReq, setNewReq] = useState([
    {
      from: "45, upper ekenwa road, Benin ",
      to: "65, ringroad, lower ekenwa, Orhodua",
      user: "Benson Davies",
      status: "Pending Driver",
      distance: "300km",
      time: "45 mins",
      weight: "400kg",
      price: "₦ 5,200",
    },
    {
      from: "45, upper ekenwa road, Benin ",
      to: "65, ringroad, lower ekenwa, Orhodua",
      user: "Benson Davies",
      status: "Driver Accepted",
      distance: "300km",
      time: "45 mins",
      weight: "400kg",
      price: "₦ 5,200",
    },
    {
      from: "45, upper ekenwa road, Benin ",
      to: "65, ringroad, lower ekenwa, Orhodua",
      user: "Benson Davies",
      status: "Pending Driver",
      distance: "300km",
      time: "45 mins",
      weight: "400kg",
      price: "₦ 5,200",
    },
    {
      from: "45, upper ekenwa road, Benin ",
      to: "65, ringroad, lower ekenwa, Orhodua",
      user: "Benson Davies",
      status: "Pending Driver",
      distance: "300km",
      time: "45 mins",
      weight: "400kg",
      price: "₦ 5,200",
    },
    {
      from: "45, upper ekenwa road, Benin ",
      to: "65, ringroad, lower ekenwa, Orhodua",
      user: "Benson Davies",
      status: "Pending Driver",
      distance: "300km",
      time: "45 mins",
      weight: "400kg",
      price: "₦ 5,200",
    },
    {
      from: "45, upper ekenwa road, Benin ",
      to: "65, ringroad, lower ekenwa, Orhodua",
      user: "Benson Davies",
      status: "Pending Driver",
      distance: "300km",
      time: "45 mins",
      weight: "400kg",
      price: "₦ 5,200",
    },
    {
      from: "45, upper ekenwa road, Benin ",
      to: "65, ringroad, lower ekenwa, Orhodua",
      user: "Benson Davies",
      status: "Pending Driver",
      distance: "300km",
      time: "45 mins",
      weight: "400kg",
      price: "₦ 5,200",
    },
    {
      from: "45, upper ekenwa road, Benin ",
      to: "65, ringroad, lower ekenwa, Orhodua",
      user: "Benson Davies",
      status: "Pending Driver",
      distance: "300km",
      time: "45 mins",
      weight: "400kg",
      price: "₦ 5,200",
    },
    {
      from: "45, upper ekenwa road, Benin ",
      to: "65, ringroad, lower ekenwa, Orhodua",
      user: "Benson Davies",
      status: "Pending Driver",
      distance: "300km",
      time: "45 mins",
      weight: "400kg",
      price: "₦ 5,200",
    },
  ]);

  // ⃗ →

  return (
    <>
      <div>
        <NavBar active={"Tracking"} />
      </div>

      <div className="tracking-root">
        <div className="title">Tracking</div>
        <div className="tracking-container">
          <div>
            <div>
              <NewRequests pik={newReq} />
            </div>
          </div>
          <div>kbkjbkjb</div>
          <div>kkjbkjbkjb</div>
        </div>
      </div>
    </>
  );
}

export default Tracking;
