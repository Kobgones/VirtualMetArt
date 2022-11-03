import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [showLinks, setShowLinks] = React.useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <nav className={`navBar ${showLinks ? "showNav" : "hideNav"}`}>
      <div className="navBarLogo">Logo</div>
      <ul className="navBarLinks">
        <li className="navBarItem">
          <Link className="navBarLink" to="/">
            Home
          </Link>
        </li>
        <li className="navBarItem">
          <Link className="navBarLink" to="gallery">
            Gallery
          </Link>
        </li>
        <li className="navBarItem">
          <Link className="navBarLink" to="highlights">
            Highlights
          </Link>
        </li>
        <li className="navBarItem">
          <Link className="navBarLink" to="about">
            About
          </Link>
        </li>
      </ul>
      <button className="navBurger" type="button" onClick={handleShowLinks}>
        <span className="burgerLine" />
      </button>
    </nav>
  );
}

export default Navbar;
