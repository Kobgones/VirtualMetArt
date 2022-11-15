import React, { useEffect, useRef, useState } from "react";
import Item from "./Item";

function Results({ ids }) {
  const [idsToShow, setIdsToShow] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const isMount = useRef(false);

  const setShowIdsWithPagination = () => {
    const start = page * limit - limit;
    const end = page * limit;
    setIdsToShow(ids.slice(start, end));
  };
  useEffect(() => {
    if (page !== 1) setPage(1);
    setShowIdsWithPagination();
  }, [ids]);

  useEffect(() => {
    if (!isMount.current) isMount.current = true;
    else setShowIdsWithPagination();
  }, [page]);

  return (
    <div>
      {idsToShow.map((id) => (
        <Item id={id} key={id} />
      ))}
      <div className="flex justify-center pb-10 lg:mt-6">
        <button
          className="bg-secondary text-white hover:border hover:border-secondary hover:bg-transparent font-bold py-4 px-8 rounded-l-lg"
          type="button"
          onClick={() => setPage(page - 1)}
        >
          Prev
        </button>
        <button
          className="bg-white text-secondary hover:border hover:border-secondary hover:bg-transparent font-bold py-4 px-8 lg:py-6 lg:px-8 rounded-r-lg focus:outline-none appearance-none"
          type="button"
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Results;
