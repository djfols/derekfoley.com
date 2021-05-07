import React, { useState } from "react";
import logo from "../content/logo.png";
import MenuIcon from '@material-ui/icons/Menu';
import ScrollSpyNav from "react-scrollspy-nav";
import HeaderItem from "./HeaderItem";

function Header() {
  const logoStyleSmall = {
    fontSize: "14px",
    width: "40px",
    paddingTop: "0px",
    paddingBottom: "0px",
  };

  const logoStyleBig = {
    fontSize: "22px",
    width: "80px",
    paddingTop: "15px",
    paddingBottom: "15px",
  };
  
  const [topStyle, setStyle] = useState(logoStyleBig);

  function trackScrollPosition() {
    const y = window.scrollY;
    if (y < 70) {
      setStyle(logoStyleBig);
    } else {
      setStyle(logoStyleSmall);
    }
  }
  React.useEffect(() => {
    window.addEventListener("scroll", function () {
      trackScrollPosition();
    });
  }, []);

  return (
    <header>
      <nav
        className="navbar fixed-top navbar-expand-md navbar-custom"
        id="nav-header"
      >
        <a className="navbar-brand py-0" id="nav-home" href="#page-top">
          <img style={topStyle} src={logo} id="nav-logo" alt="home icon" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <MenuIcon
            className="font-white materia-icons"
            id="menu-icon"
          />
        </button>
        <div
          style={topStyle}
          className="collapse navbar-collapse"
          id="navbarNav"
        >
          <div className="ml-auto navbar-nav">
            <ScrollSpyNav
              scrollTargetIds={["about", "portfolio", "cv", "contact"]}
              activeNavClass="is-current"
              offset={0}
              scrollDuration="150"
              headerBackground="true"
            >
              <ul className="navbar-nav ml-auto">
                <li>
                  <HeaderItem hrefTag="#about" tag="About" />
                </li>
                <li>
                  <HeaderItem hrefTag="#portfolio" tag="Portfolio" />
                </li>
                <li>
                  <HeaderItem hrefTag="#cv" tag="Curriculum Vitae" />
                </li>
                <li>
                  <HeaderItem hrefTag="#contact" tag="Contact" />
                </li>
              </ul>
            </ScrollSpyNav>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
