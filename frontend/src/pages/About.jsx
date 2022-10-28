import React from "react";
import "../styles/About.css";

function About() {
  return (
    <div className="about-bg bg-background">
      <div className="bg-[url('./media/about-background.jpg')] bg-cover h-screen flex flex-wrap">
        <div className="about-title-div w-16 mt-10">
          <h1 className="page-title text-white text-5xl mt-14 ">About</h1>
        </div>
      </div>
      <div className="bg-background">
        <div className="about-second-section w-full flex flex-wrap">
          <div className="about-title-2 mx-auto">
            <h2 className="text-white text-xl mb-14">About The Met</h2>
          </div>
          <div className="about-text-met">
            <p className="about-description text-black text-justify bg-background mx-6 py-8 px-6">
              The Metropolitan Museum of Art presents over 5,000 years of art
              from around the world for everyone to experience and enjoy. The
              Museum lives in two iconic sites in New York City—The Met Fifth
              Avenue and The Met Cloisters. Millions of people also take part in
              The Met experience online. Since its founding in 1870, The Met has
              always aspired to be more than a treasury of rare and beautiful
              objects. Every day, art comes alive in the Museum's galleries and
              through its exhibitions and events, revealing new ideas and
              unexpected connections across time and across cultures
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
