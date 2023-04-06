import "../styles/Header.css";
import React from "react";

import { Link } from "react-router-dom";
import { useState } from "react";
import logoURL from "../assets/raimeleelogo-r-cream.png";

const Header = () => {
  const [seeNav, setSeeNav] = useState(false);
  return (
    <div className="header">
      <Link to="/about">
        <img src={logoURL} alt="raime-lee-logo" className="header-logo" />
      </Link>
      <nav>
        <ul className="nav-bar desktop-navbar">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/development">Development</Link>
          </li>
          <li>
            <Link to="/graphicdesign">Graphic Design</Link>
          </li>
          <li>
            <Link to="/fineart">Fine Art</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
