import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./Sidebar.css";
export default (props) => {
  return (
    <Menu>
      <a className="menu-item">SIGNIN</a>
      <a href="/" className="menu-item">
        LEGAL
      </a>
      <a href="/" className="menu-item">
        LICENSES
      </a>
      <a href="/" className="menu-item">
        SECURITY
      </a>
      <a href="/" className="menu-item">
        CAREERS
      </a>
      <a href="/" className="menu-item">
        PRESS
      </a>
      <a href="/" className="menu-item">
        SUPPORT{" "}
      </a>
      <a href="/" className="menu-item">
        STATUS
      </a>
      <a href="/" className="menu-item">
        CODEBLOG
      </a>
    </Menu>
  );
};
