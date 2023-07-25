import React from "react";
import { useState } from "react";
import { createPortal } from "react-dom";
import CategoryButton from "./CategoryButton";
import ModalContent from "./ModalContent";
import colorCategory from "../models/ColorCategory";
import BasicInfo from "./BasicInfo";
import Nav from "./Nav";

const ElementCard = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedElem, setSelectedElem] = useState({});
  const [basicInfo, setBasicInfo] = useState("");
  const [hoverCategory, setHoverCategory] = useState({});

  const element = props.element;

  const elementName = element?.map((element, key) => {
    const categoryHoverStyle = {
      transform: "scale(1,1)",
      "--color": "black",
      backgroundColor: colorCategory[0][element.category],
    };

    const elementStyle = {
      "--color": colorCategory[0][element.category],
      "--hover-background-color": colorCategory[0][element.category],
    };

    const hoveredCategoryStyle =
      hoverCategory === element.category ? categoryHoverStyle : {};

    return (
      <div
        className="elementCard"
        onMouseOver={() => {
          setBasicInfo(element);
        }}
        onClick={() => {
          setShowModal(true);
          setSelectedElem(element);
        }}
        key={key}
        style={{
          gridRow: element.ypos + 2,
          gridColumn: element.xpos,
          "--border-color": colorCategory[0][element.category],
          ...elementStyle,
          ...hoveredCategoryStyle,
        }}
      >
        <h2>{element.number}</h2>
        <h1>{element.symbol}</h1>
        <h2>{element.name}</h2>
      </div>
    );
  });

  return (
    <div
      className="mid"
      onMouseOut={() => {
        setBasicInfo(false);
      }}
    >
      <div className="periodicTable">
        <Nav />
        <div className="basicInfoBox">
          <BasicInfo basicInfo={basicInfo} />
        </div>
        <div className="categoryBtns">
          <CategoryButton onCategoryHover={setHoverCategory} />
        </div>
        {elementName}
      </div>
      {showModal &&
        createPortal(
          <ModalContent
            element={selectedElem}
            onClose={() => {
              setShowModal(false);
            }}
          />,
          document.body
        )}
    </div>
  );
};

export default ElementCard;
