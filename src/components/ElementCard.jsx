import React from "react";
import ElementCardInfo from "./ElementCardInfo";
import { useState, useEffect } from "react";

const ElementCard = (props) => {
  const element = props.element;
  console.log(element);
  //   console.log(element[0]);
  //   console.log(element[0].name);
  //   const [names, setNames] = useState(null);

  //   const elementName = element.map((name) => {
  //     setNames(name.name);
  //     return names;
  //     console.log(names);
  //   });

  //   useEffect(() => {
  //     elementName();
  //   }, []);

  //
  //   const elementName = element.map((name) => {
  //     return (
  //       <div>
  //         <h1>{name.name}</h1>
  //       </div>
  //     );
  //   });

  //   useEffect(() => {
  //     elementName();
  //   }, []);

  return (
    <div>
      {/* {elementName} */}
      {/* <ElementCardInfo names={elementName} /> */}
    </div>
  );
};

export default ElementCard;
