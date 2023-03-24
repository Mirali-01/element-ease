import React from "react";
import colorCategory from "../models/ColorCategory";

const CategoryButton = () => {
  // console.log(colorCategory);

  // Object.keys(colorCategory[0]); //can map to get all the keys
  // Object.values(colorCategory[0]); //can map to get all the values

  class Element {
    constructor(name, color) {
      this.name = name;
      this.color = color;
    }
  }

  const arr = [];
  for (let name in colorCategory[0]) {
    arr.push(new Element(name, colorCategory[0][name]));
  }

  const groupColor = arr.map((element) => {
    return (
      <div className="sameCategory">
        <div
          className="colorBox"
          style={{ backgroundColor: element.color }}
        ></div>
        <h2>{element.name}</h2>
      </div>
    );
  });

  return <div>{groupColor}</div>;
};

export default CategoryButton;
