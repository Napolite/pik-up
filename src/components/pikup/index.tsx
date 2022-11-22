//This file is in JSX to allow me use the click event in a div element

import React, { useState } from "react";
import "./pikup.css";

function Pikup({ pik }: any) {
  const [expand, setExpand] = useState(false);
  return (
    <div className="pikup-root" onClick={() => setExpand(!expand)}>
      {!expand ? (
        <div className="pikup-sparse">
          <div>{`${pik.from}  → ${pik.to}`}</div>
          <div
            style={{
              height: "28px",
              width: "99px",
              color: pik.status === "Pending Driver" ? "#E07900" : "#368E00",
              background:
                pik.status === "Pending Driver" ? "#FDEDD9" : "#EFFFE6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.75rem",
              borderRadius: "4px",
            }}
          >
            {pik.status}
          </div>
        </div>
      ) : (
        <div className="pikup-expanded">
          <div>
            <div>
              <div> User: </div> <div>{pik.user}</div>
            </div>
            <div>
              <div>driver: </div> <div>{pik.driver || pik.status}</div>
            </div>
          </div>
          <div className="map">map here</div>
          <div>
            <div>
              <div>distance</div>
              <div>{pik.distance}</div>
            </div>
            <div>
              <div>time</div>
              <div>{pik.time}</div>
            </div>
            <div>
              <div>weight</div>
              <div>{pik.weight}</div>
            </div>
            <div>
              <div>Price</div>
              <div>{pik.price}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Pikup;
