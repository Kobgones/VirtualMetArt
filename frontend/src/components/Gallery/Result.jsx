import React from "react";

function Result() {
  return (
    <div className="w-80 m-auto pb-10 sm:w-9/12 lg:grid lg:grid-flow-col lg:w-fit lg:gap-x-6 lg:px-16">
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
    </div>
  );
}

export default Result;
