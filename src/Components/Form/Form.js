import React from "react";
import "./Form.css";

import bg from "../images/background.jpeg";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
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
              onSubmit={this.submitForm}
              action="https://formspree.io/f/mnqdjkba"
              method="POST"
            >
              <input placeholder=" name" type="name" name="name" />

              <input placeholder=" email" type="email" name="email" />

              <textarea
                placeholder=" message"
                type="message"
                name="message"
                rows="6"
              />
              {status === "SUCCESS" ? (
                <p>Thanks!</p>
              ) : (
                <input type="submit" value="send" style={{ color: "black" }} />
              )}
              {status === "ERROR" && <p id="err">Ooops! There was an error.</p>}
            </form>
          </div>
        </div>
      </section>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
