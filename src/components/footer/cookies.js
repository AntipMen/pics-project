import React, { useState } from "react";
import "./index.css";

export const Cookies = () => {
  const [show, setShow] = useState(true);
  if (show === false) {
    return null;
  }
  return (
    <div className="cookies">
      <span>
        This site uses cookies. You can read how we use them in our cookies
        policy.
      </span>
      <button className="cookies-btn" onClick={() => setShow(false)}>
        I accept
      </button>
    </div>
  );
};
