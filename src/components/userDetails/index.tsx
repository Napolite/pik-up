import Pikup from "components/pikup";
import React, { useState } from "react";

import $ from "jquery";
import "./details.css";
import image from "assets/images/no image.png";
function UserDetails({ piks, view }: any) {
  const [show, setShow] = useState(true);

  const handleAccordion = () => {
    setShow(!show);
    $(function () {
      console.log("hello world");
      $(".arrow").css({
        animation: show ? "show 2s forwards" : "hide 2s forwards",
      });
    });
  };
  return (
    <div className="details-root">
      <div className="details-container">
        <div className="details-title">
          <div>Benson Davies</div>
          <div onClick={() => view(false)}>&#10005; </div>
        </div>
        <div className="details-status">
          <div>
            <div>Date Joined</div>
            <div>10/10/2022</div>
          </div>
          <div>
            <div>Status</div>
            <div>Active</div>
          </div>
          <div>...</div>
        </div>
        <div className="details-user">
          <div>
            <div className="details-header">User Details:</div>
            <div></div>
          </div>
          <div>
            <div>
              <img src={image} className="details-image" />
              <div>
                <div className="name-balance">Benson Davies</div>
                <div className="name-detail">
                  benson-davies@gmail.com • 08011223344
                </div>
              </div>
            </div>
            <div>
              <div className="name-balance"> ₦ 8,830</div>
              <div className="name-detail">Wallet Balance</div>
            </div>
          </div>
        </div>
        <div className="pikups">
          <div className="accordion">
            <div className="details-header">Pikup History</div>
            <div className="arrow" onClick={handleAccordion}>
              &#x2304;
            </div>
          </div>
          <div>{show && piks.map((pik: any) => <Pikup pik={pik} />)}</div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
