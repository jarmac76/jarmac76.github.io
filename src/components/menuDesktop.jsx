import { Link } from "react-router-dom";

const NavbarDesktop = () => {
    return (
        <nav className="nav-list">
            <div className="desktopNavItem">
                <Link to="/jsmcreynolds-site-4/">Home</Link>
            </div>
            <div className="desktopNavItem">
                <Link to="/jsmcreynolds-site-4/about">About</Link>
            </div>
            <div className="desktopNavItem">
                <Link to="/jsmcreynolds-site-4/skills">Skills</Link>
            </div>
            <div className="desktopNavItem">
                <Link to="/jsmcreynolds-site-4/resume">Experience</Link>
            </div>
            <div className="desktopNavItem">
                <Link to="https://jsmcreynolds.wordpress.com/">Blog</Link>
            </div> 
        </nav>
    )
}

export default NavbarDesktop;

