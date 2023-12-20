import React, { useEffect, useState } from "react";

import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Home from "./components/pages/home";
import Admin from "./components/pages/admin";
import NavBar from "./components/navBar";
import SideMenu from "./components/sideMenu";
import Tutorial from "./components/tutorial";

/**
 * When switching between pages, the scroll will always be at the top.
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

function App() {
  // used to open and close sideMenu
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  // used to open and close tutorial
  const [isTutorialOpen, setTutorialOpen] = useState(true);

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  const toggleTutorial = () => {
    setTutorialOpen(!isTutorialOpen);
  };

  return (
    <Router className="router">
      <NavBar toggleSideMenu={toggleSideMenu} toggleTutorial={toggleTutorial} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      {isSideMenuOpen && <SideMenu toggleSideMenu={toggleSideMenu} />}
      {isTutorialOpen && <Tutorial toggleTutorial={toggleTutorial} />}
    </Router>
  );
}

export default App;
