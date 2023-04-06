import { React, useState } from "react";
import "../styles/FooterLinks.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { arrow } from "../assets/bronze-arrow.png";

const FooterLinks = () => {
  return (
    <>
      <div className="social-container">
        <a
          href="https://www.linkedin.com/in/raimelee/"
          alt="linkedin icon"
          className="linkedin social"
          target="_blank"
          rel="noreferer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://github.com/raimelee"
          alt="github icon"
          className="github social"
          target="_blank"
          rel="noreferer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        {/* <img
            src={Raime}
            alt="scroll arrow"
            class="scroll-arrow"
            href="https://www.laveer.us"
         
          /> */}
      </div>
    </>
  );
};

export default FooterLinks;
