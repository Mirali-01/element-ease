import React from "react";

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

  return <div>{elementName}</div>;
};

export default ElementCard;
