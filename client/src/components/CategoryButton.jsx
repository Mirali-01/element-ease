import colorCategory from "../models/ColorCategory";
import { Link } from "react-router-dom";

const CategoryButton = ({ onCategoryHover }) => {
  const createCategoryElement = (category, color) => ({
    category,
    color,
  });

  const groupColorElements = Object.entries(colorCategory).map(
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
        />
      );
    }
  );

  return <div className="groupColor">{groupColorElements}</div>;
};

export default CategoryButton;

const CategoryElement = ({ categoryElement, onCategoryHover }) => {
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
      <Link to={`/elements?category=${categoryElement.category}`}>
        <div className="sameCategory">
          <div
            className="colorBox"
            style={{
              backgroundColor: categoryElement.color,
            }}
          ></div>
          <h2>{categoryElement.category}</h2>
        </div>
      </Link>
    </div>
  );
};
