import React from "react";

const ElementCard = (props) => {
  const element = props.element;
  console.log(element);

  const elementName = element.map((name, key) => {
    return (
      <div
        className="elementCard"
        key={key}
        style={{
          gridRow: name.ypos,
          gridColumn: name.xpos,
        }}
      >
        <div>{name.number}</div>
        <h1>{name.symbol}</h1>
        <div>{name.name}</div>
      </div>
    );
  });

  return (
    <div>
      <div className="periodicTable">{elementName}</div>
    </div>
  );
};

export default ElementCard;
