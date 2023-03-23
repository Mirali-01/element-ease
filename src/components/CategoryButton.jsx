import React from "react";
import colorCategory from "../models/ColorCategory";

const CategoryButton = () => {
  // use filter method to get features from hover
  // console.log(colorCategory);

  const keys = Object.keys(colorCategory[0]); //can map to get all the keys
  const values = Object.values(colorCategory[0]); //can map to get all the values

  const groupColor = [keys, values].map((string) => {
    console.log(string[0]);
    return (
      <div className="sameCategory">
        {/* <div className="colorBox" style={{ backgroundColor: value }}></div> */}
        <h2>{string[0]}</h2>
      </div>
    );
  });

  return <div>{groupColor}</div>;
};

export default CategoryButton;
