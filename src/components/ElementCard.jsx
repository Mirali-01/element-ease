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

  const element = props.element;
  // console.log(element);

  const elementName = element.map((element, key) => {
    // console.log(element);
    return (
      <div
        className="elementCard"
        onMouseOver={() => {
          // when mouse is over the element card, basic info shows up on the BasicInfo component
          setBasicInfo(element);
        }}
        onClick={() => {
          // modal pops up
          setShowModal(true);
          setSelectedElem(element);
        }}
        key={key}
        style={{
          // api gives positions
          gridRow: element.ypos + 2,
          gridColumn: element.xpos,
          color: colorCategory[0][element.category],
          borderColor: colorCategory[0][element.category],
          backgroundColor: "transparent",
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
    <div
      className="mid"
      onMouseOut={() => {
        setBasicInfo(false);
      }}
    >
      <div className="periodicTable">
        <Nav />
        {/* enlarged element display */}
        <div className="basicInfoBox">
          <BasicInfo basicInfo={basicInfo} />
        </div>
        {/* key for element category */}
        <div className="categoryBtns">
          <CategoryButton relatedCategory={element} />
        </div>
        {elementName}
      </div>
      {/* modal is child component of ElementCard and displays to body of document, only changing the physical placement of the DOM node, in this case to body of doc*/}
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
