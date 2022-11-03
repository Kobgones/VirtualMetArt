import React from "react";
import Results from "../components/Gallery/Results";
import Search from "../components/Gallery/Search";

function Gallery() {
  return (
    <div className="bg-primary min-h-screen w-screen">
      <Search />
      <Results />
    </div>
  );
}

export default Gallery;
