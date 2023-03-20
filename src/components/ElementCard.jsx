import React from "react";
import ElementCardInfo from "./ElementCardInfo";
import { useState } from "react";

const ElementCard = (props) => {
  const element = props.element;
  console.log(element);

  const elementName = element.map((name, key) => {
    return (
      <div className="elementCard" key={key}>
        <div>{name.symbol}</div>
      </div>
    );
  });

  return (
    <div>
      {elementName}
      {/* <ElementCardInfo names={elementName} /> */}
    </div>
  );
};

export default ElementCard;
