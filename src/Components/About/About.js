import React from "react";
import "./About.css";

import Chad from "../images/chad.jpg";

const About = () => {
  return (
    <div id="about">
      <div id="pic">
        <img src={Chad} alt="Chad" />
      </div>
      <div id="text">
        <h3 className="text">Hi. I'm Chad.</h3>

        <p className="text">
          I'm a multifaceted developer, with an eye for design, and consequently
          making rad things! Need a website? Done. Need an app? Done. Need a
          funny joke? Debatable.
        </p>
        <p className="text">
          I love being a part of a team but also work well independently. I have
          a background in mathematics education, which has fostered my ability
          to explain challenging concepts both easily and understandably. Need
          help with your child's algebra homework? I can do that, too...
        </p>

        <p className="text">
          I'm based out of Denver, and I'm powered by lots and lots of coffee...
        </p>

        <p className="text">I'm a big fan of the following:</p>
        <br />
        <div className="things">
          <span className="things" role="img" aria-label="Things I enjoy...">
            🍕 🍺 💻
          </span>
        </div>

        <p className="text">
          Feel like I'd be a good fit for your next project? You're probably
          right! Let's chat!
        </p>

        <p className="text">
          <a href="mailto:dahc.reverse@gmail.com?subject=YOU%20ROCK!">
            dahc.reverse@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
