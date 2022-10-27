import React from "react";

function Gallery() {
  return (
    <div className="bg-background h-screen">
      <h1 className="text-center text-5xl text-primary pt-7">Gallery</h1>
      <div>
        <div className="text-center">
          <input
            className="bg-secondary text-primary opacity-70 h-12 w-80 pl-4 mt-8 rounded-md"
            type="text"
            placeholder="🔎   Search a title, artist or key word..."
          />
        </div>
        <div className="mt-10 ml-10 flex flex-col ">
          <select
            name="Exhibitions"
            id="theme-select"
            className="svg-arrow mb-3 border border-secondary rounded-full text-gray-600 h-10 pl-32 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
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
            className="svg-arrow border border-secondary rounded-full text-gray-600 h-10 pl-32 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
          >
            <option value="">Categories</option>
            <option value="">Paintings</option>
            <option value="">Sculpture</option>
            <option value="">Photography</option>
            <option value="">Ceramics</option>
            <option value="">Works on paper</option>
          </select>
        </div>
        <div className="resetSearch">
          <input type="reset" value="Reset choices" />
        </div>
      </div>
      <div className="artList">
        <p>Result</p>
      </div>
    </div>
  );
}

export default Gallery;
