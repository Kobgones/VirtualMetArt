import React from "react";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Highlights from "./pages/Highlights";
import "./App.css";

function App() {
  return (
    <div className="App">
      <p>
        <Home />
      </p>
      <p>
        <Gallery />
      </p>
      <p>
        <Highlights />
      </p>
    </div>
  );
}

export default App;
