import React, { useEffect, useState } from "react";
import { CircleLoader } from "react-spinners";
import Results from "../components/Gallery/Results";
import Search from "../components/Gallery/Search";
import Filters from "../components/Gallery/Filters";

function Gallery() {
  const [ids, setIds] = useState([]);
  const [allDepartments, setAllDepartments] = useState([]);
  const [searchIdDepartment, setSearchIdDepartment] = useState();
  const [search, setSearch] = useState("");
  const [isProcessing, setIsProcessing] = useState(false); // state to know when display the loader

  useEffect(() => {
    setIsProcessing(true); // active the loader
    fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&hasImages=true&q=gogh`
    )
      .then((response) => response.json())
      .then((result) => {
        setIds(result.objectIDs || []);
        setIsProcessing(false); // disable loader after the fetch
      })
      .catch((err) => console.error(err));
  }, []);

  const getSearchIds = () => {
    if (searchIdDepartment && search) {
      setIsProcessing(true); // active the loader
      fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&hasImages=true&departmentId=${searchIdDepartment}&q=${search}`
      )
        .then((response) => response.json())
        .then((result) => {
          setIds(result.objectIDs || []);
          setIsProcessing(false); // disable loader after the fetch
        })
        .catch((err) => console.error(err));
    } else if (search) {
      setIsProcessing(true); // active the loader
      fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&hasImages=true&q=${search}`
      )
        .then((response) => response.json())
        .then((result) => {
          setIds(result.objectIDs || []);
          setIsProcessing(false); // disable loader after the fetch
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <div className="bg-primary min-h-screen w-screen">
      <Filters
        allDepartments={allDepartments}
        setAllDepartments={setAllDepartments}
        searchIdDepartment={searchIdDepartment}
        setSearchIdDepartment={setSearchIdDepartment}
        setIds={setIds}
      />
      <Search
        search={search}
        setSearch={setSearch}
        getSearchIds={getSearchIds}
      />
      {/* ternary to display the loader or the result of the search (following the fetch) */}
      {isProcessing ? (
        <div className="flex justify-center">
          <CircleLoader color="#ECB365" size={300} />{" "}
        </div>
      ) : (
        <Results ids={ids} />
      )}
    </div>
  );
}

export default Gallery;
