import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Highlights from "./pages/Highlights";
import About from "./pages/About";
import Footer from "./components/Footer/Footer";

import "./App.css";
import "./styles/Gallery.css";

function App() {
  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="gallery">Gallery</Link>
              </li>
              <li>
                <Link to="highlights">Highlights</Link>
              </li>
              <li>
                <Link to="about">About</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="highlights" element={<Highlights />} />
            <Route path="about" element={<About />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
