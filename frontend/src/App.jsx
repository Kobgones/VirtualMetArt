import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Highlights from "./pages/Highlights";
import About from "./pages/About";
import Footer from "./components/Footer/Footer";

import "./App.css";
import "./styles/Gallery.css";
import "./styles/Home.css";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Navbar />
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
