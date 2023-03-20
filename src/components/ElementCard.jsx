import React from "react";

const ElementCard = (props) => {
  const element = props.element;
  console.log(element);

  const colorCategory = {
    "diatomic nonmetal": "lightgreen",
    "noble gas": "purple",
    "alkali metal": "firebrick",
    "alkaline earth metal": "orange",
    metalloid: "yellowgreen",
    "polyatomic nonmetal": "darkgreen",
    "post-transition metal": "darkcyan",
    "transition metal": "gray",
    lanthanide: "deepskyblue",
    actinide: "peru",
  };

  const elementName = element.map((name, key) => {
    return (
      <div
        className="elementCard"
        key={key}
        style={{
          gridRow: name.ypos,
          gridColumn: name.xpos,
          color: colorCategory[name.category],
          borderColor: colorCategory[name.category],
        }}
      >
        <p>{name.number}</p>
        <h1>{name.symbol}</h1>
        <p>{name.name}</p>
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
