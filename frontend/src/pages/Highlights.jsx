import React from "react";
import "../styles/Highlights.css";

function Highlights() {
  return (
    <div className="highlightsPage bg-primary text-background">
      <section className="titleAndImages">
        <div id="classTitle ">
          <h1 className="titleHighlights text-5xl	text-center text-secondary ">
            Highlights
          </h1>
        </div>
        <br />
        <div className="carousel">
          <img
            className="imagesCarousel"
            src="./src/assets/vincent van gogh.jpg"
            alt="vincent van gogh"
          />
        </div>
      </section>
      {/* <br /> */}
      <div className="artisteDescription text-center">
        <p>Self-Portrait with a Straw Hat (obverse: The Potato Peeler)</p>
        <br />
        <h2 className="nameArtist text-center text-6xl">Vincent van Gogh</h2>
      </div>
      <div className="classImagesHighlights">
        <img
          className="imagesHighlights"
          src="./src/assets/Georgia O’Keeffe.webp"
          alt=""
        />
        <div className="artisteDescription text-center">
          <p>Scowhide: Red, white, blue (1931)</p>
          <br />
          <h2 className="nameArtist text-center text-6xl">Georgia O’Keeffe</h2>
        </div>
        <img
          className="imagesHighlights"
          src="./src/assets/Emanuel Leutze.jpeg"
          alt=""
        />
        <div className="artisteDescription text-center">
          <p>Washington crossing the Delaware (1851)</p>
          <br />
          <h2 className="nameArtist text-center text-6xl">Emanuel Leutze</h2>
        </div>
        <img
          className="imagesHighlights"
          src="./src/assets/Claude-Monet.jpg"
          alt=""
        />
        <div className="artisteDescription text-center">
          <p>Bridge over a water lily pond (1899)</p>
          <br />
          <h2 className="nameArtist text-center text-6xl">Claude Monet</h2>
        </div>
        <img
          className="imagesHighlights"
          src="./src/assets/Duccio di Buoninsegna.jpeg"
          alt=""
        />
        <div className="artisteDescription text-center">
          <p>Virgin and child (1290-1300)</p>
          <br />
          <h2 className="nameArtist text-center text-6xl">
            Duccio di Buoninsegna
          </h2>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Highlights;
