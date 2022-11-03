import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="bg-[url('./media/home-background-image.jpg')] bg-cover h-screen flex flex-col items-center lg:bg-[center_70rem]">
        <h1 className="text-7xl text-background text-left drop-shadow-md pt-3 pl-3 lg:self-start lg:text-8xl lg:w-44 lg:pl-6">
          Virtual Met'Art
        </h1>
        <div className="mt-96">
          <a href="#home-text" className="text-white page-title down-arrow">
            <img src="frontend/media/down-arrow.png" alt="" />
          </a>
        </div>
      </div>

      <section className="bg-background py-6 lg:px-14 lg:py-10 flex flex-col items-center">
        <h2
          id="home-text"
          className="text-primary text-4xl text-center pt-5 px-4 mb-6"
        >
          Start your <span className="text-gold italic">virtual art </span>
          journey with MET !
        </h2>
        <div>
          <p className="text-primary home-border text-lg text-center pt-6 px-14 pb-2 sm:text-2xl lg:px-44">
            Today we take the time to explore the MET from every angle ! Located
            in the heart of New York City, the Metropolitan Museum of Art is one
            of the largest art museums in the world and a must see. You can't
            come to the Big Apple any time soon ? Don't worry, now you have the
            possibility to explore every MET's exhibition !{" "}
          </p>
        </div>
        <Link to="gallery">
          <button
            className="bg-gold opacity-90 h-16 w-56 px-4 rounded-md mt-10 md:w-64 md:h-20 lg:w-80 lg:h-20 lg:mt-10"
            type="button"
          >
            <span className="text-primary text-xl font-bold md:text-2xl">
              Go to the gallery
            </span>
          </button>
        </Link>
      </section>
    </div>
  );
}
