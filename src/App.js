import React from "react";
import "./styles.css";

import CG1 from "../src/Components/images/Compliments/CG1.png";
import CG2 from "../src/Components/images/Compliments/CG2.png";
import CG3 from "../src/Components/images/Compliments/CG3.png";

import G1 from "../src/Components/images/Gratitude/G1.png";
import G2 from "../src/Components/images/Gratitude/G2.png";
import G3 from "../src/Components/images/Gratitude/G3.png";

import H1 from "../src/Components/images/Harold/H1.png";
import H2 from "../src/Components/images/Harold/H2.png";
import H3 from "../src/Components/images/Harold/H3.png";
import H4 from "../src/Components/images/Harold/H4.png";

import M1 from "../src/Components/images/Mountains/M1.png";
import M2 from "../src/Components/images/Mountains/M2.png";

import V1 from "../src/Components/images/Vocabby/V1.png";
import V2 from "../src/Components/images/Vocabby/V2.png";
import V3 from "../src/Components/images/Vocabby/V3.png";

import Landing from "./Components/Landing/Landing";
import About from "./Components/About/About";
import Project from "./Components/Projects/Projects";
import MyForm from "./Components/Form/Form";
import Social from "./Components/Social/Social";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageIndex: 0,

      // projects: [
      //   {
      //     title: "The Mountains Are Calling",
      //     images: [M1, M2],
      //     url: "https://losmanzanos.github.io/national-parks/",
      //     toolsUsed: ["HTML5", "CSS3", "JavaScript", "jQuery"],
      //     source: "https://github.com/losmanzanos/national-parks",
      //     description: "...",
      //   },
      //   {
      //     title: "Vocabby",
      //     images: [V1, V2, V3],
      //     url: "https://losmanzanos.github.io/vocabby/",
      //     toolsUsed: ["HTML5", "CSS3", "JavaScript", "jQuery"],
      //     source: "https://github.com/losmanzanos/vocabby",
      //     description: "Nothing.",
      //   },
      //   {
      //     title: "The Compliment Generator",
      //     images: [CG1, CG2, CG3],
      //     url: "https://compliments.vercel.app/",
      //     toolsUsed: [
      //       "HTML5",
      //       "CSS3",
      //       "React",
      //       "Node.js",
      //       "Express",
      //       "PostgreSQL",
      //     ],
      //     source: "https://github.com/losmanzanos/compliments-client",
      //     backEnd: "https://github.com/losmanzanos/compliments-server",
      //     description: ":)",
      //   },
      //   {
      //     title: "A Little Gratitude...",
      //     images: [G1, G2, G3],
      //     url: "https://gratitudes.vercel.app/",
      //     toolsUsed: [
      //       "HTML5",
      //       "CSS3",
      //       "React",
      //       "Node.js",
      //       "Express",
      //       "PostgreSQL",
      //       "JSON Web Tokens",
      //     ],
      //     source: "https://github.com/losmanzanos/gratitudes-client",
      //     backEnd: "https://github.com/losmanzanos/gratitudes-server",
      //     description: "!",
      //   },
      //   {
      //     title: "Harold",
      //     images: [H1, H2, H3, H4],
      //     url: "https://image-analyzer.vercel.app/",
      //     toolsUsed: [
      //       "HTML5",
      //       "CSS3",
      //       "React",
      //       "Node.js",
      //       "Express",
      //       "PostgreSQL",
      //       "JSON Web Tokens",
      //       "Google Cloud",
      //     ],
      //     source: "https://github.com/losmanzanos/labels-client",
      //     backEnd: "https://github.com/losmanzanos/labels-server",
      //     description: "HAROLD!",
      //   },
      // ],

      projects: [
        {
          title: "Harold",
          images: [H1, H2, H3, H4],
          url: "https://image-analyzer.vercel.app/",
          toolsUsed: [
            "HTML5",
            "CSS3",
            "React",
            "Node.js",
            "Express",
            "PostgreSQL",
            "JSON Web Tokens",
            "Google Cloud",
          ],
          source: "https://github.com/losmanzanos/labels-client",
          backEnd: "https://github.com/losmanzanos/labels-server",
          description: "Description coming soon...",
        },
        {
          title: "A Little Gratitude...",
          images: [G1, G2, G3],
          url: "https://gratitudes.vercel.app/",
          toolsUsed: [
            "HTML5",
            "CSS3",
            "React",
            "Node.js",
            "Express",
            "PostgreSQL",
            "JSON Web Tokens",
          ],
          source: "https://github.com/losmanzanos/gratitudes-client",
          backEnd: "https://github.com/losmanzanos/gratitudes-server",
          description:
            "Responsive web application with mobile-first design, full CRUD functionality, and user authentication. Allows users to create daily gratitudes, and store them in a calendar view, which can later be updated.",
        },
        {
          title: "The Compliment Generator",
          images: [CG1, CG2, CG3],
          url: "https://compliments.vercel.app/",
          toolsUsed: [
            "HTML5",
            "CSS3",
            "React",
            "Node.js",
            "Express",
            "PostgreSQL",
          ],
          source: "https://github.com/losmanzanos/compliments-client",
          backEnd: "https://github.com/losmanzanos/compliments-server",
          description:
            "Client-side user interface with REST API and CRUD endpoints. Allows users to add their own compliments to a database, and also receive a random compliment from said database.",
        },
        {
          title: "Vocabby",
          images: [V1, V2, V3],
          url: "https://losmanzanos.github.io/vocabby/",
          toolsUsed: ["HTML5", "CSS3", "JavaScript", "jQuery"],
          source: "https://github.com/losmanzanos/vocabby",
          description:
            "Responsive, mobile-first application built with jQuery, that allows users to retrieve visual information about a word by querying third-party APIs like YouTube and Bing.",
        },
        {
          title: "The Mountains Are Calling",
          images: [M1, M2],
          url: "https://losmanzanos.github.io/national-parks/",
          toolsUsed: ["HTML5", "CSS3", "JavaScript", "jQuery"],
          source: "https://github.com/losmanzanos/national-parks",
          description: "Description coming soon...",
        },
      ],
    };
  }

  render() {
    const random_bg_color = () => {
      var x = Math.floor(Math.random() * 256);
      var y = Math.floor(Math.random() * 256);
      var z = Math.floor(Math.random() * 256);
      var bgColor = "rgb(" + x + "," + y + "," + z + ")";
      console.log(bgColor);
      document.body.style.background = bgColor;
    };

    random_bg_color();

    console.log("Hello");

    return (
      <div className="App">
        <Landing />
        <About />
        <section id="projects">
          <h3 className="work-title">My Work</h3>
          {/* <p className="CMS">
            Note: These projects tend to progress in difficulty from n00b to
            pro... If you want to see the latest and greatest{" "}
            <span id="fire" role="img" aria-label="fire">
              🔥
            </span>{" "}
            check out the later projects!
          </p> */}
          <p className="color-change">Not a fan of the background color?</p>

          <button
            type="submit"
            id="submit"
            onClick={random_bg_color}
            className="bg-color"
          >
            <span className="trees" role="img" aria-label="dots">
              🔴 🟢 🟣 🔵
            </span>
          </button>

          <button
            onClick={random_bg_color}
            id="mobile-color"
            className="bg-color"
          >
            <span className="wand">🪄</span>
          </button>

          <div className="gallery">
            <Project projects={this.state.projects} />
          </div>

          <p className="CMS">
            More a fan of content management systems like{" "}
            <a
              href="http://fullbloomcounseling.com/"
              alt="Full Bloom Counseling"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span id="WP">WordPress?</span>
            </a>{" "}
            Prefer to have something your clients can easily add to and update
            themselves? No problem.{" "}
            <a
              href="http://fullbloomcounseling.com/"
              alt="Full Bloom Counseling"
              target="_blank"
              rel="noopener noreferrer"
            >
              I do that, too...
            </a>
            <br />
            <br />
            <a
              href="http://fullbloomcounseling.com/"
              alt="Full Bloom Counseling"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="hiddenWP">WordPress Demo</span>
            </a>
          </p>
        </section>
        <MyForm />
        <Social />
      </div>
    );
  }
}
