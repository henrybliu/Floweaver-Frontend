import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImInfo } from "react-icons/im";
import "../style/navBar.css";

const NavBar = ({ toggleSideMenu, toggleTutorial }) => {
  return (
    <div className="navBarContainer">
      <div className="leftNavBar">
        <GiHamburgerMenu id="hamburger" onClick={toggleSideMenu} />
      </div>
      <div className="middleNavBar">
        <h1>FloWeaver</h1>
      </div>
      <div className="rightNavBar">
        <ImInfo id="info" onClick={toggleTutorial}></ImInfo>
      </div>
    </div>
  );
};

export default NavBar;
