import { useState } from "react";
import { Link } from "react-router-dom";
import { Divide as Hamburger } from "hamburger-react";

const NavbarModile = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    
  }

return (
  <>
    <div className="nav-button" onClick={toggleMenu}>
      <Hamburger toggled={menuOpen} toggle={setMenuOpen} />
    </div>
    <div className={`overlay-div ${menuOpen ? "overlay" : null }`}  >
      <div className="nav-panel">
        <div className="navItem">
          <Link to="/jsmcreynolds-site-4/" onClick={toggleMenu}>Home</Link>
        </div>
        <div className="navItem">
          <Link to="/jsmcreynolds-site-4/about" onClick={toggleMenu}>About</Link>
        </div>
        <div className="navItem">
          <Link to="/jsmcreynolds-site-4/skills" onClick={toggleMenu}>Skills</Link>
        </div>
        <div className="navItem">
          <Link to="/jsmcreynolds-site-4/resume" onClick={toggleMenu}>Experience</Link>
        </div>
        <div className="navItem" >
          <Link to="https://jsmcreynolds.wordpress.com/">Blog</Link>
        </div>
      </div>
    </div>
  </>
);
};

export default NavbarModile;
