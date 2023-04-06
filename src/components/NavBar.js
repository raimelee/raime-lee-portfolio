import { React, useState } from "react";
// import { Link } from "react-router-dom";
import "../styles/NavBar.css";

// import logoUrl from "../assets/RaimeLeeLogo.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="Navbar">
        <span alt="r logo" class="r-logo">
          R
        </span>

        <div className={`nav-items ${isOpen && "open"}`}>
          <a href="/about">About</a>
          <div className="nav-line"></div>
          <a href="/development">Development</a>
          <div className="nav-line"></div>
          <a href="/graphicdesign">Graphic Design</a>
          <div className="nav-line"></div>
          <a href="/fineart">Fine Art</a>
          <div className="nav-line"></div>
          <a href="/contact">Contact</a>
        </div>
        <div
          className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
