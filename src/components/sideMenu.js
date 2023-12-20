import React from "react";
import { useSpring, animated } from "react-spring";
import { IoClose } from "react-icons/io5";
import UCSDxScripps from "../images/UCSDxScripps.webp";
import "../style/sideMenu.css";

const contributors = [
  "Dr. Sarah Giddings",
  "Ariel Anchanattu",
  "Heitor Schueroff",
  "Bobby Sanchez",
  "Mohak Vaswani",
  "Niv Anidjar",
  "Henry Liu",
];

const SideMenu = ({ toggleSideMenu }) => {
  // animation using spring react
  const animatedProps = useSpring({
    from: { transform: "translateX(-400px)", opacity: 1 },
    opacity: 1,
    transform: "translate(0px)",
    config: { mass: 1, tension: 35, friction: 10 },
  });
  return (
    <animated.div className="sideMenuModal" style={{ ...animatedProps }}>
      <div className="menuContainer">
        <div className="menuContent">
          <div className="closeContainer">
            <IoClose id="close" onClick={toggleSideMenu} />
          </div>
          <div className="infoContainer">
            <h1>FloWeaver </h1>
            <div className="text"></div>
            <p>
              Welcome to FloWeaver, an interactive visualization tool for ocean
              currents. With FloWeaver, users can explore ocean connectivity and
              water transport patterns using dynamic maps. Our inspiration and
              the original version of the project can be found&nbsp;
              <a
                href="https://neilbanas.com/projects/flowweaver/"
                rel="noopener noreferrer"
                target="_blank"
              >
                here
              </a>
              .
            </p>
          </div>
          <div className="contributors">
            <h3>Contributors</h3>
            <div className="grid">
              {contributors.map((name) => (
                <div className="name" key={name}>
                  {name}
                </div>
              ))}
            </div>
          </div>
          <div className="footer">
            <img src={UCSDxScripps} alt="UCSD x Scripps logo"></img>
            <p></p>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default SideMenu;
