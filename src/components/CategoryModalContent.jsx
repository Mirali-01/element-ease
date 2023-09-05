import React from "react";
// import ModalWrapper from "./ModalWrapper";

const CategoryModalContent = ({ elements, element, onClose }) => {
  // if there are elements that have the same element.category, display the ModalWrapper for those elements, and then place them in modalCategories
  // console.log(elements);
  // Filter elements based on the category
  const categoryElements = elements.filter(
    (elem) => elem.category === element.category
  );

  return (
    <div
      className="modalContainer"
      style={{ color: element.color }}
      onClick={onClose}
    >
      <h1 className="modalHeader">{element.category}</h1>
      <div className="modalWrapper">
        <div
          onClick={(e) => e.stopPropagation()}
          className="modalCategories"
          style={{ border: `0.5vh solid ${element.color}` }}
        >
          {categoryElements.map((elem) => (
            <h2 key={elem._id}>{elem.name}</h2>
          ))}
          {/* element ModalWrappers in the same element.category */}
          {/* <ModalWrapper /> */}
        </div>
      </div>
    </div>
  );
};

export default CategoryModalContent;
