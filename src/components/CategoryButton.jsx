import React, { useState } from "react";
import { createPortal } from "react-dom";
import colorCategory from "../models/ColorCategory";
import CategoryModalContent from "./CategoryModalContent";

const CategoryButton = ({ onCategoryHover }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedElement, setSelectedElement] = useState(null);

  const createCategoryElement = (category, color) => ({
    category,
    color,
  });

  const groupColorElements = Object.entries(colorCategory[0]).map(
    ([elementCategory, elementColor]) => {
      const categoryElement = createCategoryElement(
        elementCategory,
        elementColor
      );
      return (
        <div
          className="categoryHolder"
          onMouseEnter={() => {
            onCategoryHover(categoryElement.category);
          }}
          onMouseLeave={() => {
            onCategoryHover(null);
          }}
          style={{
            "--color": categoryElement.color,
            "--hover-background-color": categoryElement.color,
          }}
          key={categoryElement.category}
        >
          <div
            onClick={() => {
              setShowModal(true);
              setSelectedElement(categoryElement);
            }}
            className="sameCategory"
          >
            <div
              className="colorBox"
              style={{
                backgroundColor: categoryElement.color,
              }}
            ></div>
            <h2>{categoryElement.category}</h2>
          </div>
        </div>
      );
    }
  );

  return (
    <>
      <div className="groupColor">{groupColorElements}</div>
      {showModal &&
        createPortal(
          <CategoryModalContent
            element={selectedElement}
            onClose={() => setShowModal(false)}
          />,
          document.body
        )}
      ;
    </>
  );
};

export default CategoryButton;
