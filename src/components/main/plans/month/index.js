import React from "react";
import "./index.css";

export const Month = ({ onCheck, check }) => {
  return (
    <div className="choose-month">
      <div className="switcher">
        <span className="labelA">Monthly</span>
        <span className="switch">
          <input
            className="radio-e"
            type="checkbox"
            checked={check}
            onChange={onCheck}
          />
          <span className="slider round" />
        </span>
        <span className="labelB">
          Annual
          <br />
          <span className="caption">(2 months free)</span>
        </span>
      </div>
    </div>
  );
};
