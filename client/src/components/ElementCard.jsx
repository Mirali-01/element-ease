import React, { useState } from "react";
import { createPortal } from "react-dom";
import CategoryButton from "./CategoryButton";
import colorCategory from "../models/ColorCategory";
import ModalContent from "./ModalContent";
import BasicInfo from "./BasicInfo";
import Nav from "./Nav";

const ElementCard = ({ element }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedElem, setSelectedElem] = useState({});
  const [basicInfo, setBasicInfo] = useState("");
  const [hoverCategory, setHoverCategory] = useState("");

  return (
    <div
      className="mid"
      onMouseOut={() => {
        setBasicInfo("");
      }}
    >
      <div className="periodicTable">
        <Nav />
        <div className="basicInfoBox">
          {basicInfo && <BasicInfo basicInfo={basicInfo} />}
        </div>
        <div className="categoryBtns">
          <CategoryButton
            elements={element}
            onCategoryHover={setHoverCategory}
          />
        </div>
        <ElementGrid
          element={element}
          basicInfo={basicInfo}
          showModal={showModal}
          setShowModal={setShowModal}
          setSelectedElem={setSelectedElem}
          hoverCategory={hoverCategory}
          setBasicInfo={setBasicInfo}
        />
      </div>
      {showModal &&
        createPortal(
          <ModalContent
            element={selectedElem}
            onClose={() => setShowModal(false)}
          />,
          document.body
        )}
    </div>
  );
};

export default ElementCard;

const ElementGrid = ({
  element,
  setShowModal,
  setSelectedElem,
  hoverCategory,
  setBasicInfo,
}) => {
  if (!element) return null;

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
          gridRow: elem.ypos + 2,
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
