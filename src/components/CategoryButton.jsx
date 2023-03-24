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

  // sameCategory div needs styling, make it invert like the element cards
  const groupColor = arr.map((element, key) => {
    return (
      <div
        className="sameCategory"
        style={{
          "--hover-color": "black",
          "--hover-background-color": "whitesmoke",
        }}
        key={key}
      >
        <div
          className="colorBox"
          style={{
            borderColor: element.color,
            "--hover-border-color": "transparent",
            "--hover-background-color": element.color,
          }}
        ></div>
        <h2>{element.name}</h2>
      </div>
    );
  });

  return <div className="groupColor">{groupColor}</div>;
};

export default CategoryButton;
