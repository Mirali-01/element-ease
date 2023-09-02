import React from "react";

const CategoryModalContent = ({ element, onClose }) => {
  // console.log(element);
  // if elements are in the same category, display those elements in modalCategories

  return (
    <div
      className="modalContainer"
      style={{ color: element.elementColor }}
      onClick={onClose}
    >
      <h1 className="modalHeader">{element.elementCategory}</h1>
      <div className="modalWrapper">
        <div
          onClick={(e) => e.stopPropagation()}
          className="modalCategories"
          style={{ border: `0.5vh solid ${element.elementColor}` }}
        >
          <p>Get all elements for each category</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryModalContent;
