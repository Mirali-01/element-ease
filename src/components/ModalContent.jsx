import React from "react";
import colorCategory from "../models/ColorCategory";

const ModalContent = ({ element, onClose }) => {
  //   console.log(element);

  return (
    <div className="modalContainer" onClick={onClose}>
      <div
        className="modal"
        style={{
          color: colorCategory[element.category],
          borderColor: colorCategory[element.category],
          "background-color": "black",
          border: "0.5vh solid",
        }}
      >
        <h3>{element.number}</h3>
        <h1>{element.symbol}</h1>
        <h3>{element.name}</h3>
      </div>
    </div>
  );
};

export default ModalContent;
