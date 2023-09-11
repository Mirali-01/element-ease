import React from "react";
import colorCategory from "../models/ColorCategory";

const BasicInfo = ({ basicInfo }) => {
  return (
    <div
      className="basicInfo"
      style={{
        color: colorCategory[0][basicInfo.category],
        borderColor: colorCategory[0][basicInfo.category],
      }}
    >
      <h2>{basicInfo.number}</h2>
      <h1>{basicInfo.symbol}</h1>
      <h2>{basicInfo.name}</h2>
    </div>
  );
};

export default BasicInfo;
