import React from "react";
import colorCategory from "../models/ColorCategory";

const CategoryButton = (props, { updateParentStyle }) => {
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
    const handleCategoryHover = () => {
      const categoryStyle = {
        transform: "scale(1,1)",
        "--color": "black",
        backgroundColor: colorCategory[0][element.category],
      };
      updateParentStyle(categoryStyle);
    };

    const handleCategoryUnhover = () => {
      const categoryStyle = {
        "--color": colorCategory[0][element.category],
        "--hover-background-color": colorCategory[0][element.category],
      };
      updateParentStyle(categoryStyle);
    };
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
        // onMouseEnter={() => handleCategoryHover()}
        // onMouseLeave={() => handleCategoryUnhover()}
        style={{
          "--color": element.color,
          "--hover-background-color": element.color,
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
