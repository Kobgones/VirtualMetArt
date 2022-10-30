import React from "react";
import Result from "../components/Gallery/Result";
import Search from "../components/Gallery/Search";

function Gallery() {
  return (
    <div className="bg-background h-screen w-screen">
      <Search />
      <Result />
    </div>
  );
}

export default Gallery;
