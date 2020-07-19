import React from "react";
import "./index.css";

export const SignUp = () => (
  <div className="signup-wrapper">
    <div className="signup-intro">
      <div className="signup-title">Embrace your digital content</div>
      <div className="signup-benefits">
        <span className="set"></span>
        <span>Free 14-day trial</span>
        <span className="set"></span>
        <span>No credit card required</span>
        <span className="set"></span>
        <span>Set up in 3 minutes or less</span>
        <span className="set"></span>
      </div>
    </div>
    <form className="signup-form">
      <div className="signup-container">
        <input
          type="email"
          placeholder="E-mail"
          className="signup-input"
          autoComplete="on"
        />
        <input
          type="password"
          placeholder="Password"
          className="signup-input"
        />
        <button className="btn-primary">Create your free account</button>
      </div>
    </form>
  </div>
);
