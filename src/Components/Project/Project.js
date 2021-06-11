import React from "react";
import "./Project.css";
import Modal from "../Modal/Modal";

const Project = (props) => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const showModal = (e) => {
    setShow(true);
  };

  const { projects } = props;
  console.log("Hello from project");
  const projectList = projects.map((project, index) => {
    return (
      <li key={index}>
        <div className="project-tile">
          <figure>
            <img
              src={project.image}
              alt={project.title}
              onClick={(e) => {
                setDescription(project.description);
                setTitle(project.title);
                showModal();
              }}
            />
            <figcaption>
              <h3>{project.title}</h3>
              <div className="tools-used">{project.toolsUsed.join(" | ")}</div>
            </figcaption>
            <section className="links">
              <div className="source">
                <span className="fas fa-code fa-fw project-link-icon"></span>
                <a href={project.source} target="_blank" rel="noreferrer">
                  <p> Source Code 2</p>
                </a>
              </div>
              {project.backEnd ? (
                <div className="server">
                  <span className="fas fa-server fa-fw project-link-icon"></span>
                  <a href={project.backEnd} target="_blank" rel="noreferrer">
                    <p> Server Code</p>
                  </a>
                </div>
              ) : null}
              {/* <div className="server"></div> */}
              <div className="demo">
                <span className="fas fa-desktop fa-fw project-link-icon"></span>
                <a href={project.url} target="_blank" rel="noreferrer">
                  <p> Live Demo</p>
                </a>
              </div>
              <div className="server">
                <span className="fas fa-desktop fa-fw project-link-icon"></span>
                <a>
                  <p> Server Code</p>
                </a>
              </div>
            </section>
          </figure>

          <Modal
            show={show}
            setShow={setShow}
            title={title}
            description={description}
          />
        </div>
      </li>
    );
  });
  return <div className="project-list">{projectList}</div>;
};

export default Project;
