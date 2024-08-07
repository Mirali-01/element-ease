import RandomWikiElement from "./RandomWikiElement";
import { useNavigate } from "react-router-dom";

export const Nav = () => {
  const navigate = useNavigate();
  return (
    <div className="nav">
      <RandomWikiElement />
      <h1
        className="header"
        onClick={() => {
          navigate("/");
        }}
      >
        The Periodic Table of Elements
      </h1>
      <div className="linkContainer">
        <a href="https://github.com/Mirali-01" target="_blank" rel="noreferrer">
          <img
            src="/assets/images/github.png"
            alt="Github"
            attribute="https://img.icons8.com/nolan/512/github.png"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/mir-mali/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/assets/images/Linkedin.svg"
            alt="LinkedIn"
            attribute="https://visualpharm.com/assets/852/Linkedin-595b40b65ba036ed117d4495.svg"
          />
        </a>
        <a href="mailto:mir.m.ali01@gmail.com">
          <img
            src="/assets/images/Email.svg"
            alt="Email"
            attribute="https://visualpharm.com/assets/372/Email-595b40b65ba036ed117d43e6.svg"
          />
        </a>
      </div>
    </div>
  );
};

export default Nav;
