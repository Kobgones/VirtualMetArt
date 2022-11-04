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
      <div className="navBarLogo">
        <Link to="/">
          <img className="logo" src="./media/logo-white.png" alt="logo" />
        </Link>
      </div>
      <ul className="navBarLinks">
        <li className="navBarItem slideInDown-1">
          <Link className="navBarLink" to="/" onClick={handleShowLinks}>
            Home
          </Link>
        </li>
        <li className="navBarItem slideInDown-2">
          <Link className="navBarLink" to="gallery" onClick={handleShowLinks}>
            Gallery
          </Link>
        </li>
        <li className="navBarItem slideInDown-3">
          <Link
            className="navBarLink"
            to="highlights"
            onClick={handleShowLinks}
          >
            Highlights
          </Link>
        </li>
        <li className="navBarItem slideInDown-4">
          <Link className="navBarLink" to="about" onClick={handleShowLinks}>
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
