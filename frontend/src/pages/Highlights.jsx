import React from "react";
import "../styles/Highlights.css";

function Highlights() {
  return (
    <div className="highlightsPage bg-primary text-background ">
      <div className="title ">
        <h1 className="text-5xl	text-center ">Highlights</h1>
      </div>
      <br />
      <div className="highlightsPictures">
        <img
          src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1045&q=80"
          alt=""
        />
        <img
          src="https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=945&q=80"
          alt=""
        />
      </div>
      <br />
      <div className="artisteDescription text-center">
        <p>Self-Portrait with a Straw Hat (obverse: The Potato Peeler)</p>
        <br />
        <h2 className="text-center text-6xl">Vincent van Gogh</h2>
      </div>
    </div>
  );
}

export default Highlights;
