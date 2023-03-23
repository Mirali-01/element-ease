import React from "react";
import colorCategory from "../models/ColorCategory";

const CategoryButton = () => {
  // use filter method to get features from hover
  // console.log(colorCategory);

  // const groupColor = Object.keys(colorCategory).forEach((key) => {
  //   // console.log(colorCategory[key]);
  //   return (
  //     <div className="sameCategory">
  //       <div className="colorBox" style={{ backgroundColor: color }}></div>
  //       <h2>{colorCategory[key]}</h2>
  //     </div>
  //   );
  // });

  const groupColor = colorCategory.map((color) => {
    let keys = Object.keys(colorCategory[0]);
    console.log(keys);
    return (
      <div className="sameCategory">
        <div className="colorBox" style={{ backgroundColor: color }}></div>
        <h2>{keys}</h2>
      </div>
    );
  });

  return <div>{groupColor}</div>;
};

export default CategoryButton;
