import React from "react";

const ModalContent = (props) => {
  return (
    <div className="modal">
      <div>I'm a modal dialog</div>
      <button onClick={props.onClose}>Close</button>
    </div>
  );
};

export default ModalContent;
