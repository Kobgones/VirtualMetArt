import React from "react";
import "../styles/About.css";

function About() {
  return (
    <div className="about-bg bg-background">
      <div className="about-image bg-[url('./media/about-background.jpg')] bg-center h-screen flex flex-wrap">
        <div className="about-title-div w-16 h-0">
          <h1 className="page-title text-white text-5xl mt-24">About</h1>
        </div>
        <div className="about-subtitle w-screen flex flex-wrap justify-center mt-24 pb-4">
          <p className="text-white text-2xl md:text-3xl min-w-full text-center">
            About the Met
          </p>
          <p className="about-description-p text-justify bg-background mx-8 sm:mx-16 my-8 px-6 md:px-20 lg:px-28 pt-4 sm:pt-10 min-w-xs max-w-4xl">
            The Metropolitan Museum of Art presents over 5,000 years of art from
            around the world for everyone to experience and enjoy. The Museum
            lives in two iconic sites in New York City—The Met Fifth Avenue and
            The Met Cloisters. Millions of people also take part in The Met
            experience online. Since its founding in 1870, The Met has always
            aspired to be more than a treasury of rare and beautiful objects.
            Every day, art comes alive in the Museum's galleries and through its
            exhibitions and events, revealing new ideas and unexpected
            connections across time and across cultures
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
