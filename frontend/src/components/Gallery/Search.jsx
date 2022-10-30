import React from "react";

function Search() {
  return (
    <div className="pt-6 ml-8">
      <section className="w-full flex items-center justify-around sm:inline-block">
        <div className="pt-6 h-26 w-10 mt-10 self-start sm:pt-0 sm:mt-0">
          <h1 className="page-title mt-14 text-5xl text-primary sm:mt-0 sm:text-6xl">
            Gallery
          </h1>
        </div>
        <div className="basis-64">
          <section className="text-center flex flex-col sm:flex-row sm:items-center sm:justify-start sm:mb-6 lg:justify-center">
            <select
              name="Exhibitions"
              id="theme-select"
              className="svg-arrow mt-6 mb-2 border border-background rounded-full text-background h-14 w-56 text-center bg-primary hover:border-gray-600 focus:outline-none appearance-none"
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
              className="svg-arrow mb-2 rounded-full text-background h-14 w-56 text-center bg-primary hover:border-gray-600 focus:outline-none appearance-none sm:mt-6 sm:ml-6"
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
              className="w-56 mb-3 text-xl rounded-full text-center text-primary sm:mt-6"
            >
              Clear Filters
            </button>
          </section>
        </div>
      </section>
      <input
        className="svg-search bg-secondary opacity-50 h-12 w-11/12 pl-8 mt-8 mb-8 rounded-md focus:outline-none sm:mt-0"
        type="text"
        placeholder="Search a title, artist or key word..."
      />
    </div>
  );
}

export default Search;
