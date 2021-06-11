import React from "react";
import "./Social.css";
import Rocket from "../images/rocket.png";

const up = () => {
  document.getElementById("landing").scrollIntoView(true);
};

const Social = () => {
  return (
    <div id="social">
      <p>
        Contact me at:
        <br />
        <a href="mailto:dahc.reverse@gmail.com?subject=YOU%20ROCK!">
          dahc.reverse@gmail.com
        </a>
      </p>
      <p>
        My
        <a
          href="https://github.com/losmanzanos"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          GitHub
        </a>{" "}
        and
        <a
          href="https://www.linkedin.com/in/chad-moravec/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          LinkedIn
        </a>
      </p>

      <img id="rocket" src={Rocket} alt="go home" onClick={up} />
    </div>
  );
};

export default Social;
