import React from "react";
import { useState } from "react";
import { createPortal } from "react-dom";
import ModalContent from "./ModalContent";

const ElementCard = (props) => {
  const [showModal, setShowModal] = useState(false);

  const element = props.element;
  // console.log(element);

  const colorCategory = {
    "diatomic nonmetal": "lightgreen",
    "noble gas": "purple",
    "alkali metal": "firebrick",
    "alkaline earth metal": "orange",
    metalloid: "yellowgreen",
    "polyatomic nonmetal": "darkgreen",
    "post-transition metal": "darkcyan",
    "transition metal": "gray",
    lanthanide: "deepskyblue",
    actinide: "peru",
  };

  const elementName = element.map((element, key) => {
    return (
      <div
        className="elementCard"
        onClick={() => {
          setShowModal(true);
        }}
        key={key}
        style={{
          gridRow: element.ypos,
          gridColumn: element.xpos,
          color: colorCategory[element.category],
          borderColor: colorCategory[element.category],
          "--hover-color": "black",
          "--hover-border-color": "transparent",
          "--hover-background-color": colorCategory[element.category],
        }}
      >
        <p className="number">{element.number}</p>
        <h1>{element.symbol}</h1>
        <p>{element.name}</p>
      </div>
    );
  });

  return (
    <div>
      {/* <button>Noble Gas</button> */}
      <div className="periodicTable">{elementName}</div>
      {showModal &&
        createPortal(
          <ModalContent
            element={element}
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
