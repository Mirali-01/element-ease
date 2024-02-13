import { useState } from "react";
import colorCategory from "../models/ColorCategory";
import CategoryModalContent from "./CategoryModalContent";

const CategoryButton = ({ elements, onCategoryHover }) => {
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
        <CategoryElement
          key={categoryElement.category}
          categoryElement={categoryElement}
          onCategoryHover={onCategoryHover}
          setShowModal={setShowModal}
          setSelectedElement={setSelectedElement}
        />
      );
    }
  );

  return (
    <>
      <div className="groupColor">{groupColorElements}</div>
      {showModal && (
        <CategoryModalContent
          elements={elements}
          element={selectedElement}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default CategoryButton;

const CategoryElement = ({
  categoryElement,
  onCategoryHover,
  setShowModal,
  setSelectedElement,
}) => {
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
};
