import React, { useState, useRef } from "react";
import ReactMapGL, {
  Marker,
  ScaleControl,
  NavigationControl,
} from "react-map-gl";
import "../style/map.css";
import models from "../models.json";
import { GiPositionMarker } from "react-icons/gi";
import Settings from "../components/settings";

const Map = () => {
  const [isSettingsOpen, setSettingsOpen] = useState(false);
  const [flying, setFlying] = useState(false);
  const [bounds, setBounds] = useState(null);
  const mapRef = useRef();

  const toggleSettings = () => {
    setBounds(null);
    setSettingsOpen(!isSettingsOpen);
  };

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    zoom: 1.2,
    latitude: 5, // for the map to be centered on load
    projection: "naturalEarth",
  });

  const onMoveEnd = () => {
    if (flying) {
      setFlying(false);
      console.log("flying has ended");
      let currBounds = mapRef.current.getBounds();
      setBounds(currBounds);
    }
  };

  const handleViewportChange = (newViewport) => {
    setViewport(newViewport);
  };

  const handleMarkerClick = (model) => {
    setFlying(true);
    mapRef.current.flyTo({
      center: [model.longitude, model.latitude],
      zoom: 7,
    });
    setSettingsOpen(true);
  };

  return (
    <ReactMapGL
      onMoveEnd={onMoveEnd}
      maxBounds={bounds}
      ref={mapRef}
      onViewportChange={handleViewportChange} // Use the callback to track flying state
      initialViewState={viewport}
      mapboxAccessToken="pk.eyJ1IjoiaGxpdTExIiwiYSI6ImNsbWF2dXoyZDBzZXQzZHF1Mjd1OXkxcjgifQ.nuXqo90y7s31fwQH3IZNmA"
      style={{ width: "100%", height: "100%" }}
      mapStyle="mapbox://styles/mapbox/light-v11"
    >
      {/* adds all of the existing models as "points" on the map */}
      {models.coordinates.map((model) => (
        <Marker
          key={model.location}
          latitude={model.latitude}
          longitude={model.longitude}
        >
          {/* moves camera to the model that was selected */}
          <GiPositionMarker
            id="marker"
            onClick={() => handleMarkerClick(model)}
          ></GiPositionMarker>
        </Marker>
      ))}
      <NavigationControl style={{ marginTop: "100px" }}></NavigationControl>
      <ScaleControl unit="imperial"></ScaleControl>
      {isSettingsOpen && <Settings toggleSettings={toggleSettings} />}
    </ReactMapGL>
  );
};

export default Map;
