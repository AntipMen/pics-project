import React from "react";
import "./index.css";
import "../month/index.css";

export const MicroPlan = () => (
  <div className="micro-plan">
    <div className="micro-card">
      <div className="title-plan">Micro</div>
      <div className="content-mountly">
        <span className="currency">$</span>
        <span className="amount">120</span>
        <span className="mo">/mo</span>
      </div>

      <div className="content-yearly">
        <span className="currency">$</span>
        <span className="amount">1200</span>
        <span className="mo">/yr</span>
      </div>
      <div className="item-plan">Small team, new business</div>
    </div>
    <button className="btn">Try it for Free</button>
  </div>
);
