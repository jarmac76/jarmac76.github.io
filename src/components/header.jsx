import NavbarDesktop from "./menuDesktop";
import NavbarModile from "./menuMoblie";
import logo from "/assets/Logo1.png"

const Header = (props) => {



  return (
    <div className="header">
      <div className="header-band">
        <div className="logo-band">
          <figure className="logo-image">
            <img src={logo} alt="JM logo"></img>
          </figure>
          <div className="name-title">
            <h2>Jared McReynolds</h2>
          </div>
        </div>
        <div className="nav-band-desktop">
          <NavbarDesktop />
        </div>
        <div className="nav-band-mobile">
          <NavbarModile />
        </div>
      </div>
    </div>
  );
};

export default Header;
