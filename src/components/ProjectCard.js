import React from "react";
import "./ProjectCard.css";

const ProjectCard = () => {
  return (
    <div className="projectcards">
      <div class="row">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Project Title</span>
              <p>project description and what it was code with will go here</p>
            </div>
            <div class="card-action">
              <a href="#">Code</a>
              <a href="#">Site</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
