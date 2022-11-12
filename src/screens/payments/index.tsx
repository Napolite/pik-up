import React, { useState } from "react";
import NavBar from "../../components/navbar";
import Payment from "./payment";
import "./payments.css";
function Payments() {
  const [payments, setPayments] = useState([
    {
      time: "23/02/2022 • 12:42",
      name: "pik-up admin",
      desc: "weekly payouts to drivers",
      amount: " ₦ 100,001.00",
      type: "debit",
    },
    {
      time: "23/02/2022 • 12:42",
      name: "Benson Davies",
      desc: "Successful Payment of Dispatch",
      amount: " ₦ 100,001.00",
      type: "debit",
    },
    {
      time: "23/02/2022 • 12:42",
      name: "pik-up admin",
      desc: "weekly payouts to drivers",
      amount: " ₦ 100,001.00",
      type: "debit",
    },
    {
      time: "23/02/2022 • 12:42",
      name: "pik-up admin",
      desc: "weekly payouts to drivers",
      amount: " ₦ 100,001.00",
      type: "debit",
    },
    {
      time: "23/02/2022 • 12:42",
      name: "Benson Davies",
      desc: "weekly payouts to drivers",
      amount: " ₦ 100,001.00",
      type: "debit",
    },
    {
      time: "23/02/2022 • 12:42",
      name: "pik-up admin",
      desc: "weekly payouts to drivers",
      amount: " ₦ 100,001.00",
      type: "debit",
    },
    {
      time: "23/02/2022 • 12:42",
      name: "pik-up admin",
      desc: "weekly payouts to drivers",
      amount: " ₦ 100,001.00",
      type: "debit",
    },
  ]);
  return (
    <>
      <div>
        <NavBar active={"Payments"} />
      </div>
      <div className="payments-root">
        <div className="title">Payments</div>
        <div className="payments-container">
          <div className="payments-details">
            <div className="payments-tab">
              <div>
                <div>All Transactions</div>
                <div>Credits (₦ 1,200,034)</div>
                <div>Debits (₦ 200,034)</div>
              </div>
              <div>
                <div>5th Oct, 2022</div>
                <div>search</div>
              </div>
            </div>
            <div className="payments-table-header">
              <div>Date & Time</div>
              <div>Personnel</div>
              <div>Description</div>
              <div>Amount</div>
              <div>Type</div>
            </div>
            <div>
              {payments.map((payment) => (
                <Payment payment={payment} />
              ))}
            </div>
          </div>
          <div className="account-details">
            <div className="wallet-balance">
              <div>Wallet Balance</div>
              <div>₦ 1,002,560.02</div>
            </div>
            <div className="payout">
              <button>Payout To All Drivers</button>
              <button>Withdraw</button>
            </div>
            <div className="fund-details">
              <div> User details to fund wallet</div>
              <div className="details">
                <div>
                  <div>Account Name</div>
                  <div>Pik-Up Intl</div>
                </div>
                <div>
                  <div>Bank</div>
                  <div>First Bank</div>
                </div>
                <div>
                  <div>Account Number</div>
                  <div>2043611372</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payments;
