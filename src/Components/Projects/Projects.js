import React from "react";
import "./Projects.css";
import ProjectItem from "../ProjectItem/ProjectItem";

const Project = (props) => {
  function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor);
    document.body.style.background = bgColor;
  }

  random_bg_color();

  const { projects } = props;
  const projectList = projects.map((project, index) => {
    return <ProjectItem project={project} key={index} />;
  });
  return <div className="project-list">{projectList}</div>;
};

export default Project;
