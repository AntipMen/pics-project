import React from "react";
import "./index.css";

export const PayGoPlan = () => (
  <div className="pay-go-plan">
    <div className="paygo-card">
      <div className="title-plan">Pay as you go</div>
      <span className="from">from</span>
      <div className="content">
        <span className="currency">$</span>
        <span className="amount">18</span>
        <span className="mo">/mo</span>
      </div>
      <div className="item-plan">Individual users, freelancers</div>
    </div>
    <button className="btn">Try it for Free</button>
  </div>
);
