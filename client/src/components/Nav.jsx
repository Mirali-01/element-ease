import React from "react";
import RandomWikiElement from "./RandomWikiElement";

export const Nav = () => {
  return (
    <div className="nav">
      <RandomWikiElement />
      <h1>The Periodic Table of Elements</h1>
      <div className="linkContainer">
        <a href="https://github.com/Mirali-01" target="_blank" rel="noreferrer">
          <img src="https://img.icons8.com/nolan/512/github.png" alt="Github" />
        </a>
        <a
          href="https://www.linkedin.com/in/mir-mali/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://visualpharm.com/assets/852/Linkedin-595b40b65ba036ed117d4495.svg"
            alt="LinkedIn"
          />
        </a>
        <a href="mailto:mir.m.ali01@gmail.com">
          <img
            src="https://visualpharm.com/assets/372/Email-595b40b65ba036ed117d43e6.svg"
            alt="Email"
          />
        </a>
      </div>
    </div>
  );
};

export default Nav;
