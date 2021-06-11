import React from "react";
import "./Contact.css";

import bg from "../images/background.jpeg";

const Contact = () => {
  return (
    <section id="contact" style={{ backgroundImage: `url(${bg})` }}>
      <div style={{ background: { bg } }}>
        <header>
          <h2>Say Hello.</h2>
          <p className="wave">
            <span id="wave" role="img" aria-label="wave">
              👋
            </span>
          </p>
        </header>
        <div>
          <form
            action="https://formspree.io/f/mnqdjkba"
            method="POST"
            target="_blank"
          >
            <input type="text" className="name" placeholder=" name" required />

            <input
              type="email"
              className="email"
              placeholder=" email"
              required
            />

            <textarea
              className="message"
              placeholder=" message"
              rows="6"
              required
            ></textarea>

            <ul className="actions">
              <li>
                <input type="submit" value="send" style={{ color: "black" }} />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
