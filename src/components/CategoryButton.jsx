import React from "react";
import colorCategory from "../models/ColorCategory";

const CategoryButton = () => {
  // use filter method to get features from hover

  const groupColor = colorCategory.map((color) => {
    let keys = Object.keys(colorCategory);
    console.log(keys);
    return (
      <div className="sameCategory">
        <div className="colorBox" style={{ backgroundColor: color }}></div>
        <h2>{keys.map((keys) => keys)}</h2>
      </div>
    );
  });

  return <div>{groupColor}</div>;
};

export default CategoryButton;
