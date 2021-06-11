import React from "react";
import "./Landing.css";

import hand from "../images/hand.gif";

const down = () => {
  document.getElementById("about").scrollIntoView(true);
};

const Landing = () => {
  return (
    <div id="landing">
      <div id="name">
        <span id="c" className="letter">
          c
        </span>
        <span id="h" className="letter">
          h
        </span>
        <span id="a" className="letter">
          a
        </span>
        <span id="d" className="letter">
          d
        </span>
      </div>
      <div id="hand">
        <img src={hand} id="down" alt="down" onClick={down} />
      </div>
    </div>
  );
};

export default Landing;
