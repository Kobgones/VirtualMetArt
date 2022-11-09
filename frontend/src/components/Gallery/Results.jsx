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
    else setShowIdsWithPagination();
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
      <button
        className="bg-white"
        type="button"
        onClick={() => setPage(page - 1)}
      >
        Go to previous page
      </button>

      <button
        className="bg-white"
        type="button"
        onClick={() => setPage(page + 1)}
      >
        Go next page
      </button>
    </div>
  );
}

export default Results;
