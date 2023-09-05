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
          src="https://happyinvites.co/wp-content/uploads/2022/04/Arrow-Pointing-Down.gif"
          alt=""
        />
      </div>
      <ModalWrapper element={element} />
    </div>
  );
};

export default ModalContent;
