import React from "react";
import colorCategory from "../models/ColorCategory";

const CategoryButton = (props) => {
  class Element {
    constructor(elementCategory, elementColor) {
      this.elementCategory = elementCategory;
      this.elementColor = elementColor;
    }
  }

  const groupColorArr = [];
  for (let elementCategory in colorCategory[0]) {
    // Element: elementCategory : "", elementColor : ""
    // colorCategory[0][elementCategory] = elementColor
    groupColorArr.push(
      new Element(elementCategory, colorCategory[0][elementCategory])
    );
  }

  const groupColor = groupColorArr.map((element, key) => {
    return (
      <div
        className="categoryHolder"
        onMouseEnter={() => {
          props.onCategoryHover(element.elementCategory);
        }}
        onMouseLeave={() => {
          props.onCategoryHover(null);
        }}
        style={{
          "--color": element.elementColor,
          "--hover-background-color": element.elementColor,
        }}
        key={key}
      >
        <div className="sameCategory">
          <div
            className="colorBox"
            style={{
              backgroundColor: element.elementColor,
            }}
          ></div>
          <h2>{element.elementCategory}</h2>
        </div>
      </div>
    );
  });

  return <div className="groupColor">{groupColor}</div>;
};

export default CategoryButton;
