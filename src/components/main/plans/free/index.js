import React from "react";
import "./index.css";
import "../../index.css";

export const FreePlan = () => (
  <div className="free-plan">
    <div className="free-card">
      <div className="title-plan">Free</div>
      <div className="content">
        <span className="currency">$</span>
        <span className="amount">0</span>
      </div>
      <div className="item-plan">Individual users, freelancers</div>
    </div>
    <button className="btn">Try it for Free</button>
  </div>
);
