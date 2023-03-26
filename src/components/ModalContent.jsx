import React from "react";
import colorCategory from "../models/ColorCategory";

const ModalContent = ({ element, onClose }) => {
  // console.log(element);

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

      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modal"
        style={{
          color: colorCategory[0][element.category],
          borderColor: colorCategory[0][element.category],
          backgroundColor: "black",
          border: "0.5vh solid",
        }}
      >
        {/* Hiding overflow and add overflow scroll for more element info */}
        <div className="imgBox">
          <a href={element.source} target="_blank" rel="noreferrer">
            <img
              style={{ borderColor: colorCategory[0][element.category] }}
              src="https://cdn-icons-png.flaticon.com/512/5968/5968992.png"
              alt=""
            />
          </a>
        </div>

        <h3>{element.number}</h3>
        <h1>{element.symbol}</h1>
        <h3>{element.name}</h3>
        <div className="elementModal">
          Summary <hr />
          {element.summary}
        </div>
      </div>
    </div>
  );
};

export default ModalContent;
