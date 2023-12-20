import React, { useState, useRef, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { IoClose } from "react-icons/io5";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import "../style/tutorial.css";
import TutorialCard from "./tutorialCard";

const Tutorial = ({ toggleTutorial }) => {
  const [cardIdx, setCardIdx] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.style.transform = `translate(${cardIdx * -25}%)`;
    }
  }, [cardIdx]);

  const incrementIdx = () => {
    if (cardIdx < 3) {
      setCardIdx(cardIdx + 1);
    }
  };

  const decrementIdx = () => {
    if (cardIdx > 0) {
      setCardIdx(cardIdx - 1);
    }
  };

  const handleListClick = (index) => {
    setCardIdx(index);
  };

  const renderLi = (index) => {
    return (
      <li
        key={index}
        className={index === cardIdx ? "selected" : ""}
        onClick={() => handleListClick(index)}
      ></li>
    );
  };

  const animatedProps = useSpring({
    from: { transform: "translateY(1000px)", opacity: 1 },
    opacity: 1,
    transform: "translate(0px)",
    config: { mass: 1, tension: 35, friction: 10 },
  });

  return (
    <animated.div className="tutorialModal" style={{ ...animatedProps }}>
      <div className="tutorialContainer">
        <div className="closeContainer">
          <IoClose id="tutorialClose" onClick={toggleTutorial} />
        </div>
        <div className="carousel">
          <div className="slider" ref={sliderRef}>
            <TutorialCard
              title="Picking a Model"
              description="  There are blue markers placed around the map where ocean transport can be simulated. Click on one of the markers to get started! Please note that only one model can be simulated at a time."
            ></TutorialCard>
            <TutorialCard
              title="Adjusting Simulation Settings"
              description="There are settings that can be adjusted."
            ></TutorialCard>
            <TutorialCard
              title="Third card"
              description="Third tutorial info"
            ></TutorialCard>
            <TutorialCard
              title="Fourth card"
              description="Fourth tutorial info"
            ></TutorialCard>
          </div>
          <div className="navControl">
            <BsFillCaretLeftFill id="leftArrow" onClick={decrementIdx} />
            <ul>
              {Array.from({ length: 4 }).map((_, index) => renderLi(index))}
            </ul>
            <BsFillCaretRightFill id="rightArrow" onClick={incrementIdx} />
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default Tutorial;
