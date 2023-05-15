import React from "react";
// import { useState } from "react";
import colorCategory from "../models/ColorCategory";

const CategoryButton = (props) => {
  // const [colorBox, setColorBox] = useState({
  //   border: "0.25vh solid",
  //   height: "3vh",
  //   width: "3vh",
  //   "border-radius": "10%",
  // });

  // const boxHover = () => {
  //   setColorBox({
  //     ...colorBox,
  //     borderColor: "var(--hover-border-color) !important",
  //     backgroundColor: "var(--hover-background-color) !important",
  //   });
  // };
  // console.log(colorCategory);
  // Object.keys(colorCategory[0]); //can map to get all the keys
  // Object.values(colorCategory[0]); //can map to get all the values
  // isolating the name and color from element

  class Element {
    constructor(name, color) {
      this.name = name;
      this.color = color;
    }
  }

  // pushing only category names and colors objects into one element object
  const arr = [];
  for (let name in colorCategory[0]) {
    arr.push(new Element(name, colorCategory[0][name]));
  }

  // sameCategory div needs styling, make it invert like the element cards
  const groupColor = arr.map((element, key) => {
    const relatedCategory = () => {
      // need an onclick and onclose
      // console.log(props.relatedCategory);
      // console.log(element.name);
      const filterCategory = props.relatedCategory.filter((category) => {
        // all elements with the same category
        return category.category === element.name;
      });
      console.log(filterCategory);
    };
    return (
      <div
        className="categoryHolder"
        style={{
          color: element.color,
          "--hover-background-color": element.color,
          "--hover-color": "black",
        }}
      >
        <div
          onClick={() => {
            relatedCategory();
          }}
          // onMouseOver={boxHover}
          className="sameCategory"
          key={key}
        >
          <div
            className="colorBox"
            // style={colorBox}
            // onMouseOver={boxHover}
            style={{
              borderColor: element.color,
              "--hover-border-color": "black",
              "--hover-background-color": element.color,
            }}
          ></div>
          <h2>{element.name}</h2>
        </div>
      </div>
    );
  });

  return <div className="groupColor">{groupColor}</div>;
};

export default CategoryButton;
