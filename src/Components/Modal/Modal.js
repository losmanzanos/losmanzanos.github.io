import React from "react";
import "./Modal.css";

const Modal = (props) => {
  if (!props.show) {
    return null;
  }

  const closeModal = () => {
    props.setShow(false);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <br />
        <br />
        <br />
        <h1>{props.title}</h1>
        <br />
        <p className="project-description">{props.description}</p>
      </div>
    </div>
  );
};

export default Modal;
