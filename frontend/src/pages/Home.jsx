import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="bg-[url('./media/home-background-image.jpg')] bg-cover h-screen flex flex-col">
        <h1 className="text-7xl text-background text-left drop-shadow-md pt-3 pl-3">
          Virtual Met'Art
        </h1>
        <Link to="gallery">
          <button
            className="bg-gold opacity-90 h-16 w-56 px-4 mt-36 rounded-md ml-20 self-end"
            type="button"
          >
            <span className="text-primary text-xl font-bold">
              Go to the gallery
            </span>
          </button>
        </Link>
      </div>

      <section className="bg-background">
        <h2 className="text-primary text-4xl text-center pt-5 px-4">
          Start your <span className="text-gold italic">virtual art </span>
          journey with MET !
        </h2>
        <p className="text-primary text-lg text-center pt-7 px-6 pb-10">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </section>
    </div>
  );
}
