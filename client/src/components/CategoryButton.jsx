import colorCategory from "../models/ColorCategory";
import { Link } from "react-router-dom";

const CategoryButton = ({
  onCategoryHover,
  clickedCategories,
  setClickedCategories,
}) => {
  const createCategoryElement = (category, color) => ({
    category,
    color,
  });

  const toggleCategory = (category) => {
    setClickedCategories((prevClickedCategories) => {
      if (prevClickedCategories.includes(category)) {
        return prevClickedCategories.filter((c) => c !== category);
      } else {
        return [...prevClickedCategories, category];
      }
    });
  };

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
          isClicked={clickedCategories.includes(categoryElement.category)}
          toggleCategory={toggleCategory}
        />
      );
    }
  );

  return <div className="groupColor">{groupColorElements}</div>;
};

export default CategoryButton;

const CategoryElement = ({
  categoryElement,
  onCategoryHover,
  isClicked,
  toggleCategory,
}) => {
  const handleClick = () => {
    toggleCategory(categoryElement.category);
  };

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
      <div className="sameCategory">
        <div
          className="colorBox"
          onClick={handleClick}
          style={{
            backgroundColor: isClicked ? categoryElement.color : "#000",
          }}
        />
        <Link to={`/elements?category=${categoryElement.category}`}>
          <h2>{categoryElement.category}</h2>
        </Link>
      </div>
    </div>
  );
};
