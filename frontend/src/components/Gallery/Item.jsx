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

  const [showArrow, setShowArrow] = React.useState(true);

  // eslint-disable-next-line no-unused-vars
  const handleShowArrow = () => {
    setShowArrow(!showArrow);
  };

  if (item.primaryImageSmall)
    return (
      <div className="w-80 m-auto pb-10 sm:w-9/12 lg:grid lg:grid-flow-col lg:w-fit lg:items-center	lg:gap-x-6 lg:px-16 galery-shadow">
        {/* image showing modal component on click */}
        <button type="button" onClick={() => setShowModal(!showModal)}>
          {" "}
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            item={item}
          />
          <img
            className="rounded-md"
            src={item.primaryImageSmall}
            alt={item.title}
          />{" "}
        </button>
        <h2 className="text-2xl text-center my-6 text-background">
          {item.title}
          <h3 className="text-5xl italic text-center my-6 text-background">
            {item.artistDisplayName}
          </h3>
        </h2>
      </div>
    );
}

export default Item;
