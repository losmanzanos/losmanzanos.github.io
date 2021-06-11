import React, { useState } from "react";
import Modal from "../Modal/Modal";

export default function ProjectImage(props) {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const showModal = (e) => {
    setShow(true);
  };

  const { project } = props;

  return (
    <>
      <img
        className={
          "mySlides " + (props.imageIndex === props.index ? "block" : "none")
        }
        src={props.image}
        alt={project.title}
        onClick={(e) => {
          setDescription(project.description);
          setTitle(project.title);
          showModal();
        }}
      />

      <Modal
        show={show}
        setShow={setShow}
        title={title}
        description={description}
      />
    </>
  );
}
