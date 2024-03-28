import { Link } from "react-router-dom";

const NavbarDesktop = () => {
    return (
        <nav className="nav-list">
            <div className="desktopNavItem">
                <Link to="/">Home</Link>
            </div>
            <div className="desktopNavItem">
                <Link to="/about">About</Link>
            </div>
            <div className="desktopNavItem">
                <Link to="/skills">Skills</Link>
            </div>
            <div className="desktopNavItem">
                <Link to="/resume">Experience</Link>
            </div>
            <div className="desktopNavItem">
                <Link to="https://jsmcreynolds.wordpress.com/">Blog</Link>
            </div> 
        </nav>
    )
}

export default NavbarDesktop;

