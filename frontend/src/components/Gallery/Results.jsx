import React, { useEffect, useState } from "react";
import Item from "./Item";

function Results({ ids }) {
  const [idsToShow, setIdsToShow] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 10;

  useEffect(() => {
    const start = page * limit - limit;
    const end = page * limit;
    setIdsToShow(ids.slice(start, end));
  }, [page]);

  return (
    <div>
      <div>
        <img
          className="rounded-md"
          src="./media/the-death-of-socrates.jpeg"
          alt="The death of Socrates"
        />
        <div className="text-center mt-6 text-background">
          <h2 className="text-xl">The Death of Socrates</h2>
          <h3 className="italic">Jacques-Louis David</h3>
        </div>
      </div>
      {idsToShow.map((id) => (
        <Item id={id} />
      ))}
      <button
        className="bg-white"
        type="button"
        onClick={() => setPage(page + 1)}
      >
        1 go next page
      </button>
    </div>
  );
}

export default Results;
