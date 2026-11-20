import React from "react";
import { HashRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import "./App.css";

function App() {
  return (
    <Router>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-right">
          <NavLink to="/" className="navlink">Home</NavLink>
          <span>|</span>
          <NavLink to="/projects" className="navlink">Projects</NavLink>
        </div>
      </nav>

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

    </Router>
  );
}

export default App;