import React, { useState } from "react";
import TabInfo from "../../components/tab";
import NavBar from "../../components/navbar";
import group1 from "../../assets/images/group.png";
import group2 from "../../assets/images/group (1).png";
import atm1 from "../../assets/images/local_atm.png";
import atm2 from "../../assets/images/local_atm (1).png";
import searchIcon from "../../assets/images/Primary fill.png";
// import Calendar from "react-calendar";

import "./users.css";
import NewUsers from "./newUsers";
import UserDetails from "components/userDetails";

function Users() {
  const [tabs, setTab] = useState([
    {
      title: "Total Users",
      value: "1720",
      image: group1,
      color: "#E9FFDD",
    },
    {
      title: "Active Users",
      value: "920",
      image: group2,
      color: "#FAF5C3",
    },
    {
      title: "Total Spend",
      value: " ₦ 192,830.05",
      image: atm1,
      color: "#f1f1f1",
    },
    {
      title: "Average Spend By User",
      value: " ₦ 2,830.00",
      image: atm2,
      color: "#FCECEC",
    },
  ]);

  const [users, setUsers] = useState([
    {
      name: "Benson Davie",
      email: "Benson.davies@gmail.com",
      phone: "(+234)9035550111",
      date: "23/02/2022 • 12:42",
      piks: "00",
      spent: "00",
    },
    {
      name: "Benson Davie",
      email: "Benson.davies@gmail.com",
      phone: "(+234)9035550111",
      date: "23/02/2022 • 12:42",
      piks: "00",
      spent: "00",
    },
    {
      name: "Benson Davie",
      email: "Benson.davies@gmail.com",
      phone: "(+234)9035550111",
      date: "23/02/2022 • 12:42",
      piks: "00",
      spent: "00",
    },
    {
      name: "Benson Davie",
      email: "Benson.davies@gmail.com",
      phone: "(+234)9035550111",
      date: "23/02/2022 • 12:42",
      piks: "00",
      spent: "00",
    },
    {
      name: "Benson Davie",
      email: "Benson.davies@gmail.com",
      phone: "(+234)9035550111",
      date: "23/02/2022 • 12:42",
      piks: "00",
      spent: "00",
    },
    {
      name: "Benson Davie",
      email: "Benson.davies@gmail.com",
      phone: "(+234)9035550111",
      date: "23/02/2022 • 12:42",
      piks: "00",
      spent: "00",
    },
    {
      name: "Benson Davie",
      email: "Benson.davies@gmail.com",
      phone: "(+234)9035550111",
      date: "23/02/2022 • 12:42",
      piks: "00",
      spent: "00",
    },
    {
      name: "Benson Davie",
      email: "Benson.davies@gmail.com",
      phone: "(+234)9035550111",
      date: "23/02/2022 • 12:42",
      piks: "00",
      spent: "00",
    },
  ]);

  const [users2, setUsers2] = useState([
    {
      name: "Benson Davie",
      email: "Benson.davies@gmail.com",
      phone: "(+234)9035550111",
      date: "23/02/2022 • 12:42",
      piks: "45",
      spent: "34000",
    },
    {
      name: "Benson Davie",
      email: "Benson.davies@gmail.com",
      phone: "(+234)9035550111",
      date: "23/02/2022 • 12:42",
      piks: "00",
      spent: "00",
    },
    {
      name: "Benson Davie",
      email: "Benson.davies@gmail.com",
      phone: "(+234)9035550111",
      date: "23/02/2022 • 12:42",
      piks: "45",
      spent: "34000",
    },
    {
      name: "Benson Davie",
      email: "Benson.davies@gmail.com",
      phone: "(+234)9035550111",
      date: "23/02/2022 • 12:42",
      piks: "45",
      spent: "34000",
    },
    {
      name: "Benson Davie",
      email: "Benson.davies@gmail.com",
      phone: "(+234)9035550111",
      date: "23/02/2022 • 12:42",
      piks: "45",
      spent: "34000",
    },
    {
      name: "Benson Davie",
      email: "Benson.davies@gmail.com",
      phone: "(+234)9035550111",
      date: "23/02/2022 • 12:42",
      piks: "45",
      spent: "34000",
    },
    {
      name: "Benson Davie",
      email: "Benson.davies@gmail.com",
      phone: "(+234)9035550111",
      date: "23/02/2022 • 12:42",
      piks: "45",
      spent: "34000",
    },
    {
      name: "Benson Davie",
      email: "Benson.davies@gmail.com",
      phone: "(+234)9035550111",
      date: "23/02/2022 • 12:42",
      piks: "45",
      spent: "34000",
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

  const [activeTab, setActiveTab] = useState("New Users");
  return (
    <>
      <NavBar active={"Users"} />

      <div className="users-root">
        <div className="title">Users</div>
        <div className="users-tabs">
          {tabs.map((tab) => (
            <div className="tab-div">
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
              className={activeTab === "New Users" ? "active" : ""}
              onClick={() => setActiveTab("New Users")}
            >
              New Users(45)
            </div>
            <div
              className={activeTab === "All Users" ? "active" : ""}
              onClick={() => setActiveTab("All Users")}
            >
              All Users(129)
            </div>
            <div
              className={activeTab === "Active Users" ? "active" : ""}
              onClick={() => setActiveTab("Active Users")}
            >
              Active Users(100)
            </div>
            <div
              className={activeTab === "Inactive Users" ? "active" : ""}
              onClick={() => setActiveTab("Inactive Users")}
            >
              Inactive Users(29)
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
            <div className="user-name">Name</div>
            <div className="user-email">Email Address</div>
            <div className="user-phone">Phone Number</div>
            <div className="user-date">Last Login</div>
            <div className="user-piks">No of Pik-ups</div>
            <div className="user-spent">Total Spend</div>
            <div className="user-view"></div>
          </div>
          <div className="users-details-table">
            {(activeTab === "New Users" &&
              users.map((user) => <NewUsers user={user} view={setView} />)) ||
              users2.map((user) => <NewUsers user={user} view={setView} />)}
            <div className="pagination-control">
              <div>1/5</div>
              <div>&#10094;</div>
              <div>&#10095;</div>
            </div>
          </div>
        </div>
      </div>
      <div>{view ? <UserDetails piks={piks} view={setView} /> : <></>}</div>
    </>
  );
}

export default Users;
