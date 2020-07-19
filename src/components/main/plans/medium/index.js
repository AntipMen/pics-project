import React from "react";
import "./index.css";
import "../../index.css";
import "../month/index.css";

export const MediumPlan = ({ check }) => (
  <div className="medium-plan">
    <div className="medium-card">
      <div className="title-plan">Medium</div>
      {!check ? (
        <div className="content-mountly">
          <span className="currency">$</span>
          <span className="amount">840</span>
          <span className="mo">/mo</span>
        </div>
      ) : (
        <div className="content-yearly">
          <span className="currency">$</span>
          <span className="amount">8400</span>
          <span className="mo">/yr</span>
        </div>
      )}
      <div className="item-plan">Medium team, established company</div>
    </div>
    <button className="btn">Try it for Free</button>
  </div>
);
