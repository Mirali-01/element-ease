import React from "react";
import colorCategory from "../models/ColorCategory";

const CategoryButton = () => {
  // use filter method to get features from hover
  // console.log(colorCategory);

  const keys = Object.keys(colorCategory[0]); //can map to get all the keys
  const values = Object.values(colorCategory[0]); //can map to get all the values

  const groupColor = [keys, values].map((string, index, arr) => {
    console.log(string);

    // console.log(arr[0]);
    // console.log(arr[1]);
    return (
      <div className="sameCategory">
        {/* <div className="colorBox" style={{ backgroundColor: value }}></div> */}
        {/* <h2>{arr[0][count]}</h2> */}
      </div>
    );
  });

  return <div>{/* {groupColor} */}</div>;
};

export default CategoryButton;
