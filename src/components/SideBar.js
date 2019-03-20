import React from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideBar = () => {
  return (
    <div className="vertical-menu">
      <ul>
        <a href="Home">
          <FontAwesomeIcon
            className="icon"
            icon="home"
            size="2x"
            style={{ color: "#0e1059" }}
          />
          <b> Home</b>
        </a>
      </ul>
      <ul>
        <a href="About">
          <FontAwesomeIcon
            className="icon"
            icon="user-circle"
            size="2x"
            style={{ color: "#0e1059" }}
          />
          <b> About</b>
        </a>
      </ul>
      <ul>
        <a href="Portfolio">
          <FontAwesomeIcon
            className="icon"
            icon="folder"
            size="2x"
            style={{ color: "#0e1059" }}
          />
          <b>Portfolio</b>
        </a>
      </ul>
      <ul>
        <a href="Contact">
          <FontAwesomeIcon
            className="icon"
            icon="id-card"
            size="2x"
            style={{ color: "#0e1059" }}
          />
          <b>Contact</b>
        </a>
      </ul>

      <a
        id="resumeLink"
        href="https://drive.google.com/open?id=1I4tJTX8O5L7zwGyBbabGQ2APjc1CpJIv"
        target="_blank"
        rel="noopener noreferrer"
        icon="subject"
      >
        <ul>
          <FontAwesomeIcon
            className="icon"
            icon="file"
            size="2x"
            style={{ color: "#0e1059" }}
          />
        </ul>
        <b>Resume</b>
      </a>
      <ul>
        <a
          href="https://www.linkedin.com/in/juan-marcos-perez/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ul>
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              size="2x"
              style={{ color: "#0e1059" }}
            />
          </ul>
        </a>
      </ul>
      <ul>
        <a
          href="https://github.com/juanmarcosperez"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ul>
            <FontAwesomeIcon
              icon={["fab", "github"]}
              size="2x"
              style={{ color: "#0e1059" }}
            />
          </ul>
        </a>
      </ul>
    </div>
  );
};

export default SideBar;

/*
<SideNavItem href='Home' icon='home'>Home</SideNavItem>
<SideNavItem href='About' icon='person'>About</SideNavItem>
<SideNavItem href='Portfolio' icon='folder'>Portfolio</SideNavItem>
<SideNavItem href='Contact' icon='email'>Contact</SideNavItem>
<SideNavItem href='Resume' icon='subject'>Resume</SideNavItem>
*/
