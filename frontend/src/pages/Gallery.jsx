import React, { useEffect, useState } from "react";
import Results from "../components/Gallery/Results";
import Search from "../components/Gallery/Search";

function Gallery() {
  const [ids, setIds] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&hasImages=true&q=cezanne`
    )
      .then((response) => response.json())
      .then((result) => setIds(result.objectIDs))
      .catch((err) => console.error(err));
  }, []);

  const getSearchIds = () => {
    fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&hasImages=true&q=${search}`
    )
      .then((response) => response.json())
      .then((result) => setIds(result.objectIDs))
      .catch((err) => console.error(err));
  };

  const getVisibleButtons = () => {
    setVisibleButtons(true);
  };

  return (
    <div className="bg-primary min-h-screen w-screen">
      <Search
        search={search}
        setSearch={setSearch}
        getSearchIds={getSearchIds}
      />
      <Results ids={ids} />
    </div>
  );
}

export default Gallery;
