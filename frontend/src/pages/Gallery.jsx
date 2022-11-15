import React, { useEffect, useState } from "react";
import { CircleLoader } from "react-spinners";
import Results from "../components/Gallery/Results";
import Search from "../components/Gallery/Search";

function Gallery() {
  const [ids, setIds] = useState([]);
  const [search, setSearch] = useState("");
  const [isProcessing, setIsProcessing] = useState(false); // state to know when display the loader

  useEffect(() => {
    setIsProcessing(true); // active the loader
    fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&hasImages=true&q=cezanne`
    )
      .then((response) => response.json())
      .then((result) => {
        setIds(result.objectIDs);
        setIsProcessing(false); // disable loader after the fetch
      })
      .catch((err) => console.error(err));
  }, []);

  const getSearchIds = () => {
    setIsProcessing(true); // active the loader
    fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&hasImages=true&q=${search}`
    )
      .then((response) => response.json())
      .then((result) => {
        setIds(result.objectIDs);
        setIsProcessing(false); // disable loader after the fetch
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="bg-primary min-h-screen w-screen">
      <Search
        search={search}
        setSearch={setSearch}
        getSearchIds={getSearchIds}
      />
      {/* ternary to display the loader or the result of the search (following the fetch) */}
      {isProcessing ? (
        <div className="loader">
          <CircleLoader color="#ECB365" size={250} />{" "}
        </div>
      ) : (
        <Results ids={ids} />
      )}
    </div>
  );
}

export default Gallery;
