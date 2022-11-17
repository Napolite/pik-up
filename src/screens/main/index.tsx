import React, { useState } from "react";
import ChartDiv from "../../components/chart";

import "./main.css";
import NavBar from "../../components/navbar";

function MainDashboard() {
  const [riders, setRiders] = useState([
    { name: "Baron Davies", amount: "405,200", piks: 121 },
    { name: "Ada James", amount: "342,122", piks: 104 },
    { name: "Johnson Paul", amount: "359,250", piks: 97 },
  ]);

  const [spenders, setSpenders] = useState([
    { name: "Philip John", amount: "34,590", piks: 12 },
    { name: "Michael Adaku", amount: "28,750", piks: 10 },
    { name: "Obasi Odanz", amount: "24,340", piks: 5 },
  ]);

  const [location, setLocation] = useState([
    { name: "Somolu", amount: "425,455", piks: 121 },
    { name: "Ikeja", amount: "454,220", piks: 104 },
    { name: "Agege", amount: "321,102", piks: 97 },
  ]);

  const [colors, setColors] = useState([
    "#A24444",
    "#1D871D",
    "#1667C6",
    "#DE7800",
    "#874F1D",
    "#C900EA",
  ]);
  return (
    <>
      <NavBar active={"Dashboard"} />
      <div className="main-root">
        <div className="title">Dashboard</div>
        <div className="top-details">
          <div className="grid-blocks">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="chart-div">
            <div>Revenue per month(NGN)</div>
            <ChartDiv
              title={"Revenue per month(NGN)"}
              chartdata={[
                250, 200, 240, 150, 100, 230, 100, 200, 240, 190, 250, 200,
              ]}
            />
          </div>
          <div className="line"></div>

          <div className="chart-div">
            <div>Deliveries per month(NGN)</div>
            <ChartDiv
              title={"Deliveries per month(NGN)"}
              chartdata={[
                250, 200, 240, 150, 100, 230, 100, 200, 240, 190, 250, 200,
              ]}
            />
          </div>
        </div>
        <div className="bottom-details">
          <div className="bottom-block">
            <div className="bottom-block-title">
              Top Performing Riders This Month
            </div>
            <div className="bottom-block-objects">
              {riders
                .sort((a, b) => b.piks - a.piks)
                .map((rider) => (
                  <div className="bottom-block-object">
                    <div className="object-identity">
                      <div
                        // className="identity-lable"
                        style={{
                          background: `${
                            colors[Math.floor(Math.random() * 6)]
                          }`,
                          width: "24px",
                          height: "24px",
                          borderRadius: "18px",
                          fontSize: "10px",
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: 700,
                          marginRight: "5px",
                        }}
                      >
                        {rider.name.charAt(0)}
                      </div>
                      <div className="identity-name">{rider.name}</div>
                    </div>
                    <div className="object-details">
                      <div>&#8358; {rider.amount}</div>
                      <div>{rider.piks} pik-ups completed</div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="bottom-block">
            <div className="bottom-block-title">
              Top Spending Users This Month
            </div>
            <div className="bottom-block-objects">
              {spenders
                .sort((a, b) => b.piks - a.piks)
                .map((spender) => (
                  <div className="bottom-block-object">
                    <div className="object-identity">
                      <div
                        // className="identity-lable"
                        style={{
                          background: `${
                            colors[Math.floor(Math.random() * 6)]
                          }`,
                          width: "24px",
                          height: "24px",
                          borderRadius: "18px",
                          fontSize: "10px",
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: 700,
                          marginRight: "5px",
                        }}
                      >
                        {spender.name.charAt(0)}
                      </div>
                      <div className="identity-name">{spender.name}</div>
                    </div>
                    <div className="object-details">
                      <div>&#8358; {spender.amount}</div>
                      <div>{spender.piks} packages completed</div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="bottom-block">
            <div className="bottom-block-title">Top Locations This Month</div>
            <div className="bottom-block-objects">
              {location
                .sort(
                  (a, b) =>
                    parseInt(b.amount.replace(",", "")) -
                    parseInt(a.amount.replace(",", ""))
                )
                .map((locat) => (
                  <div className="bottom-block-object">
                    <div className="object-identity">
                      <div className="identity-name">{locat.name}</div>
                    </div>
                    <div className="object-details">
                      <div>&#8358; {locat.amount}</div>
                      <div>{locat.piks} pik-ups requested</div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainDashboard;
