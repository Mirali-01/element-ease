import React from "react";
import ElementCardInfo from "./ElementCardInfo";
import { useState } from "react";

const ElementCard = (props) => {
  const element = props.element;
  console.log(element);

  const elementName = element.map((name, key) => {
    return <div key={key}>{name.symbol}</div>;
  });

  return (
    <div>
      {elementName}
      {/* <ElementCardInfo names={elementName} /> */}
    </div>
  );
};

export default ElementCard;
