import React from "react";
import logo from "../../../image/client-sae-institute.webp";
import "./index.css";
import "../../../media.css";

export const Testimonial = () => (
  <div className="testimonial">
    <blockquote>
      <q>
        For somebody getting in touch for the first time with classical
        dam-services, it is a perfect starter with more than fair pricing and a
        24/7 scaling option for all features.
      </q>
      <cite>
        <span className="author">
          <span>Benjamin Frischbier</span>

          <span>
            Art Direction <br />
            SAE Institute GmbH
          </span>
        </span>
        <span className="author-logo">
          <img src={logo} alt="logo" />
        </span>
      </cite>
    </blockquote>
  </div>
);
