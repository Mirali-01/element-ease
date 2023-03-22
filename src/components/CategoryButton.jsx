import React from "react";

const CategoryButton = () => {
  const groupColor = {
    color: "black",
    "border-color": "transparent",
    "background-color": "white",
  };

  return (
    <div
      className="sameCategory"
      onclick={() => {
        groupColor();
      }}
    >
      <div className="colorBox"></div>
      <h2>Diatomic Nonmetal</h2>
    </div>
  );
};

export default CategoryButton;
