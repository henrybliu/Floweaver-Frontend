import React from "react";
import "../style/tutorialCard.css";

const TutorialCard = ({ title, description }) => {
  return (
    <div className="card">
      <div className="top">
        <h1>Would place an image here</h1>
      </div>
      <div className="bottom">
        <div className="title">
          <h1>{title}</h1>
        </div>
        <div className="description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TutorialCard;
