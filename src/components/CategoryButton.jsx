import React, { useState } from "react";
import colorCategory from "../models/ColorCategory";

const CategoryButton = (props, { updateElementStyle }) => {
  const [newStyle, setNewStyle] = useState({});

  const allElements = props.element;

  class Element {
    constructor(elementCategory, elementColor) {
      this.elementCategory = elementCategory;
      this.elementColor = elementColor;
    }
  }

  // pushing only category names and colors objects into one element object
  const groupColorArr = [];
  for (let elementCategory in colorCategory[0]) {
    // Element: elementCategory : "", elementColor : ""
    // colorCategory[0][elementCategory] = elementColor
    groupColorArr.push(
      new Element(elementCategory, colorCategory[0][elementCategory])
    );
  }

  console.log(groupColorArr);

  // filtering
  // const allElementsArr = [];
  // const groupCategory = () => {
  //   allElements.map((elements) => {
  //     allElementsArr.push(elements);
  //   });
  //   return allElementsArr;
  // };
  // groupCategory();

  // const filteredCategory = () => {
  //   allElements.filter(checkCategory);
  //   function checkCategory(elements) {
  //     if (elements.category === groupColorArr.elementCategory)
  //       return elements.name;
  //   }
  // };

  // console.log(filteredCategory);

  // const relatedCategory = () => {
  //   const filterCategory = props.relatedCategory.filter((allElements) => {
  //     const handleCategoryHover = () => {
  //       const categoryStyle = {
  //         transform: "scale(1,1)",
  //         "--color": "black",
  //         // backgroundColor: colorCategory[0][element.category],
  //         backgroundColor: colorCategory[0],
  //       };
  //       // console.log(updateElementStyle(categoryStyle));
  //       return categoryStyle;
  //     };
  //     // all elements with the same category
  //     // console.log(handleCategoryHover());
  //     return allElements.category === element.elementCategory;
  //   });
  //   console.log(filterCategory);
  // };

  const groupColor = groupColorArr.map((element, key) => {
    // filtering and pushing to an array
    // const relatedCategory = () => {
    //   const filterCategory = props.relatedCategory.filter((allElements) => {
    //     const handleCategoryHover = () => {
    //       const categoryStyle = {
    //         transform: "scale(1,1)",
    //         "--color": "black",
    //         // backgroundColor: colorCategory[0][element.category],
    //         backgroundColor: colorCategory[0],
    //       };
    //       // console.log(updateElementStyle(categoryStyle));
    //       return categoryStyle;
    //     };
    //     // all elements with the same category
    //     // console.log(handleCategoryHover());
    //     return allElements.category === element.elementCategory;
    //   });
    //   console.log(filterCategory);
    // };
    return (
      <div
        className="categoryHolder"
        // onMouseOver={() => handleCategoryHover()}
        onMouseEnter={() => {
          // console.log(groupCategory());
          // console.log(filteredCategory());
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
