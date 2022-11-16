import React from "react";

function Search({ search, setSearch, getSearchIds }) {
  const handleEnterSubmit = (e) => {
    if (e.keyCode === 13) getSearchIds();
  };

  return (
    <div className="pt-20 ml-8 sm:ml-10 md:px-10 md:pt-32 lg:pt-40 lg:px-16 lg:ml-0">
      <div className="pt-6 h-26 w-10 mt-10 mr-6 self-start sm:pt-0 sm:mt-0">
        <h1 className="page-title mt-14 text-5xl text-secondary sm:mt-0 sm:text-7xl sm:mb-6">
          Gallery
        </h1>
      </div>
      <section className="flex">
        <input
          className="bg-background opacity-90 h-12 w-9/12 pl-6 mt-8 mb-8 rounded-l-md focus:outline-none sm:mt-0 lg:w-11/12"
          type="text"
          placeholder="Search a title, artist or key word..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          onKeyDown={handleEnterSubmit}
        />
        <button
          className="bg-background svg-search text-background text-left opacity-90 h-12 w-16 text-[14px] sm:text-sm md:w-28 mt-8 mb-8 rounded-r-md focus:outline-none sm:mt-0"
          type="button"
          onClick={() => {
            getSearchIds();
          }}
        >
          Search
        </button>
      </section>
    </div>
  );
}

export default Search;
