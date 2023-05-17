import React from "react";
import colorCategory from "../models/ColorCategory";

const CategoryButton = (props) => {
  // console.log(colorCategory);

  class Element {
    constructor(name, color) {
      this.name = name;
      this.color = color;
    }
  }

  // pushing only category names and colors objects into one element object
  const arr = [];
  for (let name in colorCategory[0]) {
    arr.push(new Element(name, colorCategory[0][name]));
  }

  const groupColor = arr.map((element, key) => {
    const relatedCategory = () => {
      const filterCategory = props.relatedCategory.filter((category) => {
        // all elements with the same category
        return category.category === element.name;
      });
      console.log(filterCategory);
    };
    return (
      <div
        className="categoryHolder"
        style={{
          color: element.color,
          "--hover-background-color": element.color,
          "--hover-color": "black",
        }}
        key={key}
      >
        <div
          onClick={() => {
            relatedCategory();
          }}
          className="sameCategory"
          key={key}
        >
          <div
            className="colorBox"
            style={{
              borderColor: "black",
              backgroundColor: element.color,
            }}
          ></div>
          <h2>{element.name}</h2>
        </div>
      </div>
    );
  });

  return <div className="groupColor">{groupColor}</div>;
};

export default CategoryButton;
