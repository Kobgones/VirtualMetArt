import React, { useEffect, useState } from "react";
import Modal from "./Modal";

function Item({ id }) {
  const [item, setItem] = useState({});
  const [showModal, setShowModal] = React.useState(false);

  useEffect(() => {
    fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
    )
      .then((response) => response.json())
      .then((result) => setItem(result))
      .catch((err) => console.error(err));
  }, []);

  if (item.primaryImageSmall)
    return (
      <div className="w-80 m-auto pb-10 sm:w-9/12 lg:grid lg:grid-flow-col lg:w-fit lg:items-center	lg:gap-x-6 lg:px-16 galery-shadow">
        {/* image showing modal component on click */}
        <button type="button" onClick={() => setShowModal(!showModal)}>
          {" "}
          <Modal showModal={showModal} setShowModal={setShowModal} />
          <img
            className="rounded-md"
            src={item.primaryImageSmall}
            alt={item.title}
          />{" "}
        </button>
        <h2 className="text-xl text-center my-6 text-background">
          {item.title}
        </h2>
        <h3 className="italic text-center my-6 text-background">
          {item.artistDisplayName}
        </h3>
      </div>
    );
}

export default Item;
