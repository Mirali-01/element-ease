import React from "react";

export const Nav = () => {
  return (
    <div className="nav">
      <div className="placeholder">
        <img
          src="https://media0.giphy.com/media/RJzm826vu7WbJvBtxX/giphy.gif?cid=6c09b952f51b7c4ad83aae7a1012e0b1b3c1b2ca35fafd3c&rid=giphy.gif&ct=s"
          alt="gif"
        />
      </div>
      <h1>The Periodic Table of Elements</h1>
      <div className="linkContainer">
        <a href="https://github.com/Mirali-01">
          <img src="https://img.icons8.com/nolan/512/github.png" alt="Github" />
        </a>
        <a href="https://www.linkedin.com/in/mir-mali/">
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
