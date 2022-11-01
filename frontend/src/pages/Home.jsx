import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="bg-[url('./media/home-background-image.jpg')] bg-cover h-screen flex flex-col items-center lg:bg-center">
        <h1 className="text-7xl text-background text-left drop-shadow-md pt-3 pl-3">
          Virtual Met'Art
        </h1>
        <Link to="gallery">
          <button
            className="bg-gold opacity-90 h-16 w-56 px-4 rounded-md mt-36 lg:w-72 lg:h-20 lg:mt-56"
            type="button"
          >
            <span className="text-primary text-xl font-bold lg:text-2xl">
              Go to the gallery
            </span>
          </button>
        </Link>
        <div className="down-arrow" />
      </div>

      <section className="bg-background">
        <h2 className="text-primary text-4xl text-center pt-5 px-4 mb-6">
          Start your <span className="text-gold italic">virtual art </span>
          journey with MET !
        </h2>
        <div>
          <p className="text-primary text-lg text-center pt-6 px-14 pb-6 home-border lg:px-24 lg:text-xl">
            Today we take the time to explore the MET from every angle ! Located
            in the heart of New York City, the Metropolitan Museum of Art is one
            of the largest art museums in the world and a must see. You can't
            come to the Big Apple any time soon ? Don't worry, now you have the
            possibility to explore every MET's exhibition !{" "}
          </p>
        </div>
      </section>
    </div>
  );
}
