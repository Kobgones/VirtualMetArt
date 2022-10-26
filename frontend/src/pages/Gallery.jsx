import React from "react";

function Gallery() {
  return (
    <div>
      <div className="galleryTitle">
        <h1>Gallery</h1>
      </div>
      ;
      <div className="search">
        <div className="searchBar">
          <input type="text" placeholder="Search.." />
        </div>
        <div className="selectTheme">
          {" "}
          <p className="bg-red-200">Exhibitions</p>
          <select name="Exhibitions" id="theme-select">
            <option value="">Ex1</option>
            <option value="">Ex2</option>
            <option value="">Ex3</option>
            <option value="">Ex4</option>
            <option value="">Ex5</option>
            <option value="">Ex6</option>
          </select>
          <p className="text-red-700 flex justify-end bg-orange-500">
            Categories
          </p>
          <select name="Categories" id="theme-select">
            <option value="">Ex1</option>
            <option value="">Ex2</option>
            <option value="">Ex3</option>
            <option value="">Ex4</option>
            <option value="">Ex5</option>
            <option value="">Ex6</option>
          </select>
        </div>
        <div className="resetSearch">
          <input type="reset" value="Reset choices" />
        </div>
      </div>
      ;
      <div className="artList">
        <p>Composant ResultGallery</p>
      </div>
      ;
    </div>
  );
}

export default Gallery;
