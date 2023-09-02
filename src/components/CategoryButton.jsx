import React from "react";
import { useState } from "react";
import { createPortal } from "react-dom";
import colorCategory from "../models/ColorCategory";
import CategoryModalContent from "./CategoryModalContent";

const CategoryButton = ({ onCategoryHover }) => {
  const [showModal, setShowModal] = useState(false);
  const [element, setElement] = useState("");

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
          onCategoryHover(element.elementCategory);
        }}
        onMouseLeave={() => {
          onCategoryHover(null);
        }}
        style={{
          "--color": element.elementColor,
          "--hover-background-color": element.elementColor,
        }}
        key={key}
      >
        <div
          onClick={() => {
            setShowModal(true);
            setElement(element);
          }}
          className="sameCategory"
        >
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

  return (
    <>
      <div className="groupColor">{groupColor}</div>
      {showModal &&
        createPortal(
          <CategoryModalContent
            element={element}
            onClose={() => setShowModal(false)}
          />,
          document.body
        )}
      ;
    </>
  );
};

export default CategoryButton;
