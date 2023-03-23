import React from "react";
import { useState } from "react";
import { createPortal } from "react-dom";
import CategoryButton from "./CategoryButton";
import ModalContent from "./ModalContent";
import colorCategory from "../models/ColorCategory";
import BasicInfo from "./BasicInfo";

const ElementCard = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedElem, setSelectedElem] = useState({});

  const element = props.element;
  // console.log(element);

  const elementName = element.map((element, key) => {
    return (
      <div
        className="elementCard"
        onClick={() => {
          setShowModal(true);
          setSelectedElem(element);
        }}
        key={key}
        style={{
          gridRow: element.ypos,
          gridColumn: element.xpos,
          color: colorCategory[0][element.category],
          borderColor: colorCategory[0][element.category],
          "--hover-color": "black",
          "--hover-border-color": "transparent",
          "--hover-background-color": colorCategory[0][element.category],
        }}
      >
        <h2>{element.number}</h2>
        <h1>{element.symbol}</h1>
        <h2>{element.name}</h2>
      </div>
    );
  });

  return (
    <div>
      <div className="periodicTable">
        <div className="basicInfo"></div>
        <div className="categoryBtns">
          <CategoryButton />
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
