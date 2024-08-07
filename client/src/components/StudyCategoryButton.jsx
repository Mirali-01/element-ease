import colorCategory from "../models/ColorCategory";
import { Link } from "react-router-dom";

const StudyCategoryButton = ({
  countedCategory,
  showAllElements,
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

      const [solvedCount, totalCount] =
        countedCategory[categoryElement.category];
      const isSolved = solvedCount === totalCount;

      const categoryStyle = {
        "--color":
          showAllElements || isSolved ? categoryElement.color : "#ffffffa0",
        "--hover-background-color":
          showAllElements || isSolved ? categoryElement.color : "#000",
        "--hover-color": showAllElements || isSolved ? "#000" : "#ffffffa0",
        "--border-style": showAllElements || isSolved ? "solid" : "dashed",
      };

      const handleClick = () => {
        toggleCategory(categoryElement.category);
      };

      const isClicked = clickedCategories.includes(categoryElement.category);

      return (
        <div
          key={categoryElement.category}
          className="studyCategoryHolder"
          onMouseEnter={() => {
            if (isSolved) {
              onCategoryHover(categoryElement.category);
            }
          }}
          onMouseLeave={() => {
            onCategoryHover(null);
          }}
          style={categoryStyle}
        >
          <div className="sameStudyCategory">
            {isSolved ? (
              <>
                <div
                  className="gridColorBox"
                  onClick={handleClick}
                  style={{
                    backgroundColor: isClicked ? categoryElement.color : "#000",
                  }}
                />
                <Link
                  to={`/study/elements?category=${categoryElement.category}`}
                >
                  <h2>{categoryElement.category}</h2>
                </Link>
              </>
            ) : (
              <>
                <div
                  className="gridColorBox"
                  style={{ "--border-style": "dashed" }}
                />
                <h2>{categoryElement.category}</h2>
              </>
            )}
          </div>
        </div>
      );
    }
  );

  return (
    <div className="categoryBtns">
      <div className="groupColor">{groupColorElements}</div>
    </div>
  );
};

export default StudyCategoryButton;
