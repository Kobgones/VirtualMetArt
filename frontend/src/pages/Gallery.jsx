import React from "react";

function Gallery() {
  return (
    <div className="bg-background h-screen">
      <h1 className="page-title text-7xl text-primary text-center pt-7">
        Gallery
      </h1>

      <div className="pt-6 ml-8 flex flex-col items-center mr-10">
        <input
          className="svg-search bg-primary h-12 w-80 pl-8 mt-8 self-center rounded-md focus:outline-none"
          type="text"
          placeholder="  Search a title, artist or key word..."
        />
        <select
          name="Exhibitions"
          id="theme-select"
          className="svg-arrow mt-8 mb-2 border border-secondary rounded-full text-primary h-10 w-48 text-center bg-background hover:border-gray-600 focus:outline-none appearance-none"
        >
          <option value="">Exhibitions</option>
          <option value="">Egyptian Art</option>
          <option value="">European Paintings</option>
          <option value="">Modern Art</option>
          <option value="">Asian Art</option>
          <option value="">Drawings and Prints</option>
          <option value="">Medieval Art</option>
        </select>
        <select
          name="Categories"
          id="theme-select"
          className="svg-arrow mb-2 border border-secondary rounded-full text-primary h-10 w-48 text-center bg-background hover:border-gray-600 focus:outline-none appearance-none"
        >
          <option value="">Categories</option>
          <option value="">Paintings</option>
          <option value="">Sculpture</option>
          <option value="">Photography</option>
          <option value="">Ceramics</option>
          <option value="">Works on paper</option>
        </select>
        <p className="mb-3 rounded-full text-primary">Clear Filters</p>
      </div>

      <div className="artList">
        <div>
          <img
            className="rounded-md"
            src="./media/the-death-of-socrates.jpeg"
            alt="The death of Socrates"
          />
        </div>
        <div className="text-center mt-6">
          <h2 className="text-xl">The Death of Socrates</h2>
          <h3 className="italic">Jacques-Louis David</h3>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
