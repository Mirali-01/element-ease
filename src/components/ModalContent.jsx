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
          border: "0.5vh solid",
        }}
      >
        <h3>{element.number}</h3>
        <h1>{element.symbol}</h1>
        <h3>{element.name}</h3>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ModalContent;
