import React from "react";
import building from "../../../../image/building.svg";
import "./index.css";

export const Enterprise = () => (
  <div className="enterprise-plan">
    <div className="enterprise-card">
      <div className="title-plan">Enterprise</div>
      <img src={building} alt="building" />
      <div className="item-plan">
        Get in touch with our Sales team to discuss specific needs of your
        organisation
      </div>
    </div>
    <button className="btn">Try it for Free</button>
  </div>
);
