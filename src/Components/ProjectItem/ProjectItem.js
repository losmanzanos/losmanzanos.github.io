import React, { useEffect, useState } from "react";
import ProjectImage from "../ProjectImage/ProjectImage";

export default function ProjectItem(props) {
  let [imageIndex, setImageIndex] = useState(0);

  const project = props.project;
  useEffect(() => {
    const interval = setInterval(() => {
      if (!project.images) {
        return;
      }
      if (imageIndex >= project.images.length) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex++);
      }
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <li key={project.title} className="project-tile">
      <figure>
        <div className="w3-content w3-section">
          {project.images.map((image, index) => (
            <ProjectImage
              key={index}
              project={project}
              image={image}
              index={index}
              imageIndex={imageIndex}
            />
          ))}
        </div>
        <figcaption>
          <h3>{project.title}</h3>
          <div className="tools-used">{project.toolsUsed.join(" | ")}</div>
        </figcaption>
        <section className="links">
          <div className="source">
            <span className="fas fa-code fa-fw project-link-icon"></span>
            <a href={project.source} target="_blank" rel="noopener noreferrer">
              <p> Source Code</p>
            </a>
          </div>
          {project.backEnd ? (
            <div className="server">
              <span className="fas fa-server fa-fw project-link-icon"></span>
              <a
                href={project.backEnd}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p> Server Code</p>
              </a>
            </div>
          ) : null}
          <div className="demo">
            <span className="fas fa-desktop fa-fw project-link-icon"></span>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <p> Live Demo</p>
            </a>
          </div>
          {!project.backEnd ? <div className="server">&nbsp;</div> : null}
        </section>
      </figure>
    </li>
  );
}
