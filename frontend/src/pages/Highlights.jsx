import React from "react";
import "../styles/Highlights.css";

function Highlights() {
  return (
    <div className="hl-Page bg-primary text-background">
      <div className="hl-div-title">
        <h1 className="hl-Title text-center text-secondary ">Highlights</h1>
      </div>
      <div className="hlListObjects">
        <div className="hlObject1">
          <img
            className="hlPictures"
            src="./src/assets/vincent van gogh.jpg"
            alt="vincent van gogh"
          />
          <div className="hlDescription text-center">
            <p>Self portrait with a straw hat</p>
            <br />
            <h2 className="hlNameArtist text-5xl">Vincent van Gogh</h2>
          </div>
        </div>

        <div className="hlObject2">
          <img
            className="hlPictures"
            src="./src/assets/Georgia O’Keeffe.webp"
            alt="Georgia O’Keeffe"
          />
          <div className="hlDescription text-center">
            <p>Scowhide: Red, white, blue (1931)</p>
            <br />
            <h2 className="hlNameArtist text-center text-5xl">
              Georgia O’Keeffe
            </h2>
          </div>
        </div>

        <div className="hlObject3">
          <img
            className="hlPictures"
            src="./src/assets/Emanuel Leutze.jpeg"
            alt="Emanuel Leutze"
          />
          <div className="hlDescription text-center">
            <p>Washington crossing the Delaware (1851)</p>
            <br />
            <h2 className="hlNameArtist text-center text-5xl">
              Emanuel Leutze
            </h2>
          </div>
        </div>

        <div className="hlObject4">
          <img
            className="hlPictures"
            src="./src/assets/Claude-Monet.jpg"
            alt="Claude-Monet"
          />
          <div className="hlDescription text-center">
            <p>Bridge over a water lily pond (1899)</p>
            <br />
            <h2 className="hlNameArtist text-center text-5xl">Claude Monet</h2>
          </div>
        </div>

        <div className="hlObject5">
          <img
            className="hlPictures"
            src="./src/assets/Duccio di Buoninsegna.jpeg"
            alt="Duccio di Buoninsegna"
          />
          <div className="hlDescription text-center">
            <p>Virgin and child (1290-1300)</p>
            <br />
            <h2 className="hlNameArtist text-center text-5xl">
              Duccio di Buoninsegna
            </h2>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Highlights;
