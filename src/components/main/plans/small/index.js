import React from "react";
import "./index.css";
import "../../index.css";

export const SmallPlan = ({ check }) => (
  <div className="small-plan">
    <div className="small-card">
      <div className="title-plan">Small</div>
      {!check ? (
        <div className="content-mountly">
          <span className="currency">$</span>
          <span className="amount">480</span>
          <span className="mo">/mo</span>
        </div>
      ) : (
        <div className="content-yearly">
          <span className="currency">$</span>
          <span className="amount">4800</span>
          <span className="mo">/yr</span>
        </div>
      )}
      <div className="item-plan">Online retailers, established agencies</div>
    </div>
    <button className="btn">Try it for Free</button>
  </div>
);
