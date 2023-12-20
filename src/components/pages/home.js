import React from "react";
import "../../style/home.css";
import Map from "../map";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="mapContainer">
        <Map></Map>
      </div>
    </div>
  );
};

export default Home;
