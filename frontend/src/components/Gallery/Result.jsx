import React from "react";

function Result() {
  return (
    <div className="w-80 m-auto sm:w-9/12 lg: grid lg:grid-flow-col	lg:w-auto lg:gap-x-6 lg:mx-8">
      <div>
        <img
          className="rounded-md"
          src="./media/the-death-of-socrates.jpeg"
          alt="The death of Socrates"
        />
        <div className="text-center mt-6">
          <h2 className="text-xl">The Death of Socrates</h2>
          <h3 className="italic">Jacques-Louis David</h3>
        </div>
      </div>

      <div>
        <img
          className="rounded-md"
          src="./media/the-death-of-socrates.jpeg"
          alt="The death of Socrates"
        />
        <div className="text-center mt-6">
          <h2 className="text-xl">The Death of Socrates</h2>
          <h3 className="italic">Jacques-Louis David</h3>
        </div>
      </div>
    </div>
  );
}

export default Result;
