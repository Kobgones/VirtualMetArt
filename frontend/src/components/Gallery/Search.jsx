import React from "react";

function Search() {
  return (
    <div className="pt-6 ml-8 mr-10">
      <section className="flex align-center">
        <div className="pt-6 h-26 w-10 mt-10 self-start">
          <h1 className="page-title mt-14 text-5xl text-primary">Gallery</h1>
        </div>
        <section className="text-center">
          <select
            name="Exhibitions"
            id="theme-select"
            className="svg-arrow mt-6 mb-2 border border-secondary rounded-full text-primary h-10 w-48 text-center bg-background hover:border-gray-600 focus:outline-none appearance-none"
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

          <button
            type="button"
            className="mb-3 rounded-full text-center text-primary"
          >
            Clear Filters
          </button>
        </section>
      </section>
      <input
        className="svg-search bg-secondary h-12 w-80 pl-8 mt-8 mb-8 mr-2 rounded-md focus:outline-none"
        type="text"
        placeholder="  Search a title, artist or key word..."
      />
    </div>
  );
}

export default Search;
