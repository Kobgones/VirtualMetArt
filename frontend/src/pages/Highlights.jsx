import React from "react";
import "../styles/Highlights.css";
import HLImageSlider from "../components/HLImageSlider";
import HLImagesList from "../components/HLImagesList";
import HLSliderData from "../components/HLSliderData";

function Highlights() {
  return (
    <div className="hl-Page bg-primary text-background">
      <div className="hl-div-title">
        <h1 className="hl-Title text-center text-secondary ">Highlights</h1>
      </div>
      <HLImagesList />
      <div className="hlCarousel">
        {/* DISPLAY CAROUSEL THEN SCREEN > Tablet 1024px */}
        <HLImageSlider slides={HLSliderData} />
      </div>
      <br />
    </div>
  );
}

export default Highlights;
