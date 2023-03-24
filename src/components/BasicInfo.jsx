import React from "react";

const BasicInfo = ({ basicInfo }) => {
  return (
    <div>
      <h2>{basicInfo.number}</h2>
      <h1>{basicInfo.symbol}</h1>
      <h2>{basicInfo.name}</h2>
    </div>
  );
};

export default BasicInfo;
