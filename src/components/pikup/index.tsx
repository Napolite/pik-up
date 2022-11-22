import React from "react";

function Pikup({ pik }: any) {
  return (
    <div>
      <div>
        <div>{`${pik.from}  → ${pik.to}`}</div>
        <div>pik.status</div>
      </div>
      <div>
        <div>
          <div>
            User: <div>{pik.user}</div>
          </div>
          <div>
            driver: <div>{pik.driver || pik.status}</div>
          </div>
        </div>
        <div>map here</div>
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
    </div>
  );
}

export default Pikup;
