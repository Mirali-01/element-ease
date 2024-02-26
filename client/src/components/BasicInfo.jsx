import colorCategory from "../models/ColorCategory";

const BasicInfo = ({ element }) => {
  return (
    <div
      className="basicInfo"
      style={{
        color: colorCategory[element.category],
        borderColor: colorCategory[element.category],
      }}
    >
      <h2>{element.number}</h2>
      <h1>{element.symbol}</h1>
      <h2>{element.name}</h2>
    </div>
  );
};

export default BasicInfo;
