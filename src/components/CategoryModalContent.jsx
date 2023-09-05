import React from "react";
import ModalWrapper from "./ModalWrapper";

const CategoryModalContent = ({ elements, element, onClose }) => {
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
      <div>
        <div
          onClick={(e) => e.stopPropagation()}
          className="modalCategories"
          style={{ border: `0.5vh solid ${element.color}` }}
        >
          {categoryElements.map((elem) => (
            <ModalWrapper key={elem._id} element={elem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryModalContent;
