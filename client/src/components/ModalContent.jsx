import React from "react";
import colorCategory from "../models/ColorCategory";
import ModalWrapper from "./ModalWrapper";

const ModalContent = ({ element, onClose }) => {
  return (
    <div className="modalContainer" onClick={onClose}>
      <h1
        className="modalHeader"
        style={{ color: colorCategory[0][element.category] }}
      >
        Scroll Down For More Information
      </h1>
      <div className="downArrow">
        <img
          src="assets/images/double-arrow-down.png"
          alt="scroll down"
          attribute="https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/chevron-double-down-512.png"
        />
      </div>
      <ModalWrapper element={element} />
    </div>
  );
};

export default ModalContent;
