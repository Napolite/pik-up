import React, { useState } from "react";
import TabInfo from "../../components/tab";
import NavBar from "../../components/navbar";

import Driver from "./driver";
import UserDetails from "components/userDetails";

import { tDrivers, aDrivers, tRevenue, avRevenue, searchIcon } from "assets";

function Fleets() {
  const [tabs, setTab] = useState([
    {
      title: "Total fleets",
      value: "1720",
      image: tDrivers,
      color: "#E9FFDD",
    },
    {
      title: "Active fleets",
      value: "920",
      image: aDrivers,
      color: "#FAF5C3",
    },
    {
      title: "Total Revenue",
      value: " ₦ 192,830.05",
      image: tRevenue,
      color: "#f1f1f1",
    },
    {
      title: "Average Revenue By fleet",
      value: " ₦ 2,830.00",
      image: avRevenue,
      color: "#FCECEC",
    },
  ]);

  const [fleets, setfleets] = useState([
    {
      name: "Benson Davie",
      email: "Benson.davies@gmail.com",
      phone: "(+234)9035550111",
      date: "23/02/2022 • 12:42",
      piks: "00",
      spent: "00",
      status: "verified",
    },
    {
      name: "Benson Davie",
      email: "Benson.davies@gmail.com",
      phone: "(+234)9035550111",
      date: "23/02/2022 • 12:42",
      piks: "00",
      spent: "00",
      status: "pending",
    },
    {
      name: "Benson Davie",
      email: "Benson.davies@gmail.com",
      phone: "(+234)9035550111",
      date: "23/02/2022 • 12:42",
      piks: "00",
      spent: "00",
      status: "verified",
    },
    {
      name: "Benson Davie",
      email: "Benson.davies@gmail.com",
      phone: "(+234)9035550111",
      date: "23/02/2022 • 12:42",
      piks: "00",
      spent: "00",
      status: "pending",
    },
    {
      name: "Benson Davie",
      email: "Benson.davies@gmail.com",
      phone: "(+234)9035550111",
      date: "23/02/2022 • 12:42",
      piks: "00",
      spent: "00",
      status: "verified",
    },
    {
      name: "Benson Davie",
      email: "Benson.davies@gmail.com",
      phone: "(+234)9035550111",
      date: "23/02/2022 • 12:42",
      piks: "00",
      spent: "00",
      status: "verified",
    },
    {
      name: "Benson Davie",
      email: "Benson.davies@gmail.com",
      phone: "(+234)9035550111",
      date: "23/02/2022 • 12:42",
      piks: "00",
      spent: "00",
      status: "verified",
    },
    {
      name: "Benson Davie",
      email: "Benson.davies@gmail.com",
      phone: "(+234)9035550111",
      date: "23/02/2022 • 12:42",
      piks: "00",
      spent: "00",
      status: "verified",
    },
  ]);

  const [fleets2, setfleets2] = useState([
    {
      name: "Benson Davie",
      email: "Benson.davies@gmail.com",
      phone: "(+234)9035550111",
      date: "23/02/2022 • 12:42",
      piks: "45",
      spent: "34000",
      status: "verified",
    },
    {
      name: "Benson Davie",
      email: "Benson.davies@gmail.com",
      phone: "(+234)9035550111",
      date: "23/02/2022 • 12:42",
      piks: "00",
      spent: "00",
      status: "pending",
    },
    {
      name: "Benson Davie",
      email: "Benson.davies@gmail.com",
      phone: "(+234)9035550111",
      date: "23/02/2022 • 12:42",
      piks: "45",
      spent: "34000",
      status: "pending",
    },
    {
      name: "Benson Davie",
      email: "Benson.davies@gmail.com",
      phone: "(+234)9035550111",
      date: "23/02/2022 • 12:42",
      piks: "45",
      spent: "34000",
      status: "verified",
    },
    {
      name: "Benson Davie",
      email: "Benson.davies@gmail.com",
      phone: "(+234)9035550111",
      date: "23/02/2022 • 12:42",
      piks: "45",
      spent: "34000",
      status: "verified",
    },
    {
      name: "Benson Davie",
      email: "Benson.davies@gmail.com",
      phone: "(+234)9035550111",
      date: "23/02/2022 • 12:42",
      piks: "45",
      spent: "34000",
      status: "verified",
    },
    {
      name: "Benson Davie",
      email: "Benson.davies@gmail.com",
      phone: "(+234)9035550111",
      date: "23/02/2022 • 12:42",
      piks: "45",
      spent: "34000",
      status: "verified",
    },
    {
      name: "Benson Davie",
      email: "Benson.davies@gmail.com",
      phone: "(+234)9035550111",
      date: "23/02/2022 • 12:42",
      piks: "45",
      spent: "34000",
      status: "verified",
    },
  ]);

  const [view, setView] = useState(false);

  const [piks, setPiks] = useState([
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

  const [activeTab, setActiveTab] = useState("New fleets");
  return (
    <>
      <div className="users-tabs">
        {tabs.map((tab) => (
          <div>
            <TabInfo
              value={tab.value}
              color={tab.color}
              title={tab.title}
              image={tab.image}
            />
          </div>
        ))}
      </div>
      <div className="users-filter">
        <div>
          <div
            className={activeTab === "New fleets" ? "active" : ""}
            onClick={() => setActiveTab("New fleets")}
          >
            New fleets(45)
          </div>
          <div
            className={activeTab === "All fleets" ? "active" : ""}
            onClick={() => setActiveTab("All fleets")}
          >
            All fleets(129)
          </div>
          <div
            className={activeTab === "Active fleets" ? "active" : ""}
            onClick={() => setActiveTab("Active fleets")}
          >
            Active fleets(100)
          </div>
          <div
            className={activeTab === "Inactive fleets" ? "active" : ""}
            onClick={() => setActiveTab("Inactive fleets")}
          >
            Inactive fleets(29)
          </div>
        </div>
        <div className="date-search-filter">
          <div>5th of November</div>
          <div className="search">
            <img src={searchIcon} />
            <input type="text" placeholder="search" />
          </div>
        </div>
      </div>
      <div className="users-table">
        <div className="table-header">
          <div className="driver-name">Name</div>
          <div className="driver-email">Email Address</div>
          <div className="driver-phone">Phone Number</div>
          <div className="driver-date">Last Login</div>
          <div className="driver-piks">No of Pik-ups</div>
          <div className="driver-spent">Total Revenue</div>
          <div className="driver-status">Status</div>
          <div className="driver-view"></div>
        </div>
        <div className="users-details-table">
          {(activeTab === "New Users" &&
            fleets.map((fleet) => <Driver driver={fleet} view={setView} />)) ||
            fleets2.map((fleet) => <Driver driver={fleet} view={setView} />)}
          <div className="pagination-control">
            <div>1/5</div>
            <div>&#10094;</div>
            <div>&#10095;</div>
          </div>
        </div>
      </div>
      <div>{view ? <UserDetails piks={piks} view={setView} /> : <></>}</div>
    </>
  );
}

export default Fleets;
