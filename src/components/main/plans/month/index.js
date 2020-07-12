import React from "react";
import "./index.css";

export const Month = () => {
  return (
    <div className="choose-month">
      <div className="switcher">
        <span className="labelA">Monthly</span>
        <label className="switch">
          <input className="radio-e" type="checkbox" />
          <span className="slider round" />
        </label>
        <span className="labelB">
          Annual
          <br />
          <span className="caption">(2 months free)</span>
        </span>
      </div>
    </div>
  );
};
