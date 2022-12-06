import React, { useState } from "react";
import NavBar from "components/navbar";
import "./tracking.css";
import Requests from "./newRequests";
import { useLoadScript } from "@react-google-maps/api";
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

  const [inTransit, setInTransit] = useState([
    {
      from: "45, upper ekenwa road, Benin ",
      to: "65, ringroad, lower ekenwa, Orhodua",
      user: "Benson Davies",
      status: "In Transit",
      driver: "pending",
      distance: "300km",
      time: "45 mins",
      weight: "400kg",
      price: "₦ 5,200",
    },
    {
      from: "45, upper ekenwa road, Benin ",
      to: "65, ringroad, lower ekenwa, Orhodua",
      user: "Benson Davies",
      status: "In Transit",
      driver: "pending",
      distance: "300km",
      time: "45 mins",
      weight: "400kg",
      price: "₦ 5,200",
    },
    {
      from: "45, upper ekenwa road, Benin ",
      to: "65, ringroad, lower ekenwa, Orhodua",
      user: "Benson Davies",
      status: "In Transit",
      driver: "pending",
      distance: "300km",
      time: "45 mins",
      weight: "400kg",
      price: "₦ 5,200",
    },
    {
      from: "45, upper ekenwa road, Benin ",
      to: "65, ringroad, lower ekenwa, Orhodua",
      user: "Benson Davies",
      status: "In Transit",
      driver: "pending",
      distance: "300km",
      time: "45 mins",
      weight: "400kg",
      price: "₦ 5,200",
    },
    {
      from: "45, upper ekenwa road, Benin ",
      to: "65, ringroad, lower ekenwa, Orhodua",
      user: "Benson Davies",
      status: "In Transit",
      driver: "pending",
      distance: "300km",
      time: "45 mins",
      weight: "400kg",
      price: "₦ 5,200",
    },
    {
      from: "45, upper ekenwa road, Benin ",
      to: "65, ringroad, lower ekenwa, Orhodua",
      user: "Benson Davies",
      status: "In Transit",
      driver: "pending",
      distance: "300km",
      time: "45 mins",
      weight: "400kg",
      price: "₦ 5,200",
    },
    {
      from: "45, upper ekenwa road, Benin ",
      to: "65, ringroad, lower ekenwa, Orhodua",
      user: "Benson Davies",
      status: "In Transit",
      driver: "pending",
      distance: "300km",
      time: "45 mins",
      weight: "400kg",
      price: "₦ 5,200",
    },
    {
      from: "45, upper ekenwa road, Benin ",
      to: "65, ringroad, lower ekenwa, Orhodua",
      user: "Benson Davies",
      status: "In Transit",
      driver: "pending",
      distance: "300km",
      time: "45 mins",
      weight: "400kg",
      price: "₦ 5,200",
    },
    {
      from: "45, upper ekenwa road, Benin ",
      to: "65, ringroad, lower ekenwa, Orhodua",
      user: "Benson Davies",
      status: "In Transit",
      driver: "pending",
      distance: "300km",
      time: "45 mins",
      weight: "400kg",
      price: "₦ 5,200",
    },
  ]);

  const [completed, setCompleted] = useState([
    {
      from: "45, upper ekenwa road, Benin ",
      to: "65, ringroad, lower ekenwa, Orhodua",
      user: "Benson Davies",
      status: "Completed",
      driver: "Onazi Kinging",
      distance: "300km",
      time: "45 mins",
      weight: "400kg",
      price: "₦ 5,200",
    },
    {
      from: "45, upper ekenwa road, Benin ",
      to: "65, ringroad, lower ekenwa, Orhodua",
      user: "Benson Davies",
      status: "Completed",
      driver: "Onazi Kinging",
      distance: "300km",
      time: "45 mins",
      weight: "400kg",
      price: "₦ 5,200",
    },
    {
      from: "45, upper ekenwa road, Benin ",
      to: "65, ringroad, lower ekenwa, Orhodua",
      user: "Benson Davies",
      status: "Completed",
      driver: "Onazi Kinging",
      distance: "300km",
      time: "45 mins",
      weight: "400kg",
      price: "₦ 5,200",
    },
    {
      from: "45, upper ekenwa road, Benin ",
      to: "65, ringroad, lower ekenwa, Orhodua",
      user: "Benson Davies",
      status: "Completed",
      driver: "Onazi Kinging",
      distance: "300km",
      time: "45 mins",
      weight: "400kg",
      price: "₦ 5,200",
    },
    {
      from: "45, upper ekenwa road, Benin ",
      to: "65, ringroad, lower ekenwa, Orhodua",
      user: "Benson Davies",
      status: "Completed",
      driver: "Onazi Kinging",
      distance: "300km",
      time: "45 mins",
      weight: "400kg",
      price: "₦ 5,200",
    },
    {
      from: "45, upper ekenwa road, Benin ",
      to: "65, ringroad, lower ekenwa, Orhodua",
      user: "Benson Davies",
      status: "Completed",
      driver: "Onazi Kinging",
      distance: "300km",
      time: "45 mins",
      weight: "400kg",
      price: "₦ 5,200",
    },
    {
      from: "45, upper ekenwa road, Benin ",
      to: "65, ringroad, lower ekenwa, Orhodua",
      user: "Benson Davies",
      status: "Completed",
      driver: "Onazi Kinging",
      distance: "300km",
      time: "45 mins",
      weight: "400kg",
      price: "₦ 5,200",
    },
    {
      from: "45, upper ekenwa road, Benin ",
      to: "65, ringroad, lower ekenwa, Orhodua",
      user: "Benson Davies",
      status: "Completed",
      driver: "Onazi Kinging",
      distance: "300km",
      time: "45 mins",
      weight: "400kg",
      price: "₦ 5,200",
    },
    {
      from: "45, upper ekenwa road, Benin ",
      to: "65, ringroad, lower ekenwa, Orhodua",
      user: "Benson Davies",
      status: "Completed",
      driver: "Onazi Kinging",
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
            <div className="tracking-title">
              <div>New Requests</div>
            </div>
            <Requests pik={newReq} />
          </div>
          <div>
            <div className="tracking-title">
              <div>Pik-Ups in Transit</div>
            </div>
            <Requests pik={inTransit} />
          </div>
          <div>
            <div className="tracking-title">
              <div>Completed Pik-ups</div>
            </div>
            <Requests pik={completed} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Tracking;
