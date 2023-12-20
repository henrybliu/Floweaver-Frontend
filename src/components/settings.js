import React from "react";
import { useSpring, animated } from "react-spring";
import { GiRabbit, GiTortoise } from "react-icons/gi";
import {
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Slider,
} from "@mui/material";
import "../style/settings.css";

const Settings = ({ toggleSettings }) => {
  // animation using spring react
  const animatedProps = useSpring({
    from: { transform: "translateX(500px)", opacity: 1 },
    opacity: 1,
    transform: "translateX(0px)",
    config: { mass: 1, tension: 35, friction: 10 },
  });
  return (
    <animated.div className="settingsContainer" style={{ ...animatedProps }}>
      <div className="controlsContainer">
        <h1>Settings</h1>
        <h2>Simulation Speed</h2>
        <div className="time">
          <GiTortoise id="tortoise"></GiTortoise>
          <Slider marks step={10} id="timeSlider"></Slider>
          <GiRabbit id="hare"></GiRabbit>
        </div>
        <h2>Wind Speed</h2>
        <div className="windSpeed">
          <GiTortoise id="tortoise"></GiTortoise>
          <Slider marks step={10} id="windSlider"></Slider>
          <GiRabbit id="hare"></GiRabbit>
        </div>

        <div className="layers">
          <h2>Layers</h2>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Salinity" />
            <FormControlLabel control={<Checkbox />} label="Temperature" />
          </FormGroup>
        </div>
        <h2>Particle Depth</h2>
        <div className="flows">
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Surface" />
            <FormControlLabel
              control={<Checkbox />}
              label="Surface Level with Wind"
            />
            <FormControlLabel control={<Checkbox />} label="3/4 Depth" />
          </FormGroup>
        </div>
      </div>
      <div className="buttonContainer">
        <Button id="startButton" variant="outlined">
          START SIMULATION
        </Button>
        <Button id="otherButton" variant="outlined" onClick={toggleSettings}>
          CANCEL
        </Button>
      </div>
    </animated.div>
  );
};

export default Settings;
