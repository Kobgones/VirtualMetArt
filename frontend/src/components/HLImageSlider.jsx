import React, { useState } from "react";
import { FaArrowAltCircleUp, FaArrowAltCircleDown } from "react-icons/fa";
import "../styles/Highlights.css";
import Item from "./Gallery/Item";

function HLImageSlider() {
  const [current, setCurrent] = useState(0);

  const highlightIds = [
    11417, 436532, 436105, 436545, 437394, 437881, 438754, 437329, 204812,
    438817, 437153, 437790,
  ];

  const nextSlide = () => {
    setCurrent(current === highlightIds.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? highlightIds.length - 1 : current - 1);
  };

  // console.log(current);

  if (!Array.isArray(highlightIds) || highlightIds.length <= 0) {
    return null;
  }

  // const [showArrow, setShowArrow] = React.useState(true);

  // const handleShowArrow = () => {
  //   setShowArrow(!showArrow);
  // };

  return (
    <section className="slider">
      <FaArrowAltCircleUp className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleDown className="right-arrow" onClick={nextSlide} />
      {highlightIds.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            // key={index}
          >
            {index === current && (
              <Item className="bg-gray-200" id={slide} key={slide} />
            )}
          </div>
        );
      })}
    </section>
  );
}

export default HLImageSlider;
