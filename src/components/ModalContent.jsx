import React from "react";
import colorCategory from "../models/ColorCategory";

const ModalContent = ({ element, onClose }) => {
  //   console.log(element);

  return (
    <div className="modalContainer">
      <div
        className="modal"
        style={{
          // color: "black",
          // "border-color": "white",
          // "background-color": colorCategory[element.category],
          color: colorCategory[element.category],
          borderColor: colorCategory[element.category],
          "background-color": "black",
          border: "solid",
        }}
      >
        <p>{element.number}</p>
        <h1>{element.symbol}</h1>
        <p>{element.name}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ModalContent;
