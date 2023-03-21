import React from "react";

const ModalContent = ({ element, onClose }) => {
  //   console.log(element);

  return (
    <div className="modalContainer">
      <div className="modal">
        <h1>{element.name}</h1>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ModalContent;
