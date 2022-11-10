import React, { useState } from "react";
import { FaArrowAltCircleUp, FaArrowAltCircleDown } from "react-icons/fa";
import HLSliderData from "./HLSliderData";
import "../styles/Highlights.css";

function HLImageSlider({ slides }) {
  const [current, setCurrent] = useState(0);
  const { length } = slides;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // console.log(current);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <FaArrowAltCircleUp className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleDown className="right-arrow" onClick={nextSlide} />
      {HLSliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img
                src={slide.image}
                alt="showroom pictures"
                className="HLSlideImages"
              />
            )}
          </div>
        );
      })}
    </section>
  );
}

export default HLImageSlider;
