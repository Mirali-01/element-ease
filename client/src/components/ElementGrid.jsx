import colorCategory from "../models/ColorCategory";

const ElementGrid = ({
  element,
  setShowModal,
  setSelectedElem,
  hoverCategory,
  setBasicInfo,
}) => {
  if (!Array.isArray(element)) return null;

  return element.map((elem) => {
    const categoryHoverStyle = {
      transform: "scale(1,1)",
      "--color": "black",
      backgroundColor: colorCategory[0][elem.category],
    };

    const elementStyle = {
      "--color": colorCategory[0][elem.category],
      "--hover-background-color": colorCategory[0][elem.category],
    };

    const hoveredCategoryStyle =
      hoverCategory === elem.category ? categoryHoverStyle : {};

    return (
      <div
        className="elementCard"
        onMouseOver={() => setBasicInfo(elem)}
        onClick={() => {
          setShowModal(true);
          setSelectedElem(elem);
        }}
        key={elem.number}
        style={{
          gridRow: elem.ypos,
          gridColumn: elem.xpos,
          "--border-color": colorCategory[0][elem.category],
          ...elementStyle,
          ...hoveredCategoryStyle,
        }}
      >
        <h2>{elem.number}</h2>
        <h1>{elem.symbol}</h1>
        <h2>{elem.name}</h2>
      </div>
    );
  });
};
export default ElementGrid;
