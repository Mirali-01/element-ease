import React from "react";

const ModalContent = ({ element, onClose }) => {
  console.log(element);

  return (
    <div className="modalContainer">
      <div className="modal">
        <div></div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ModalContent;
