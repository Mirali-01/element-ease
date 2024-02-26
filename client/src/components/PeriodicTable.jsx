import colorCategory from "../models/ColorCategory";
import { useState, useEffect } from "react";
import axios from "axios";
import CategoryButton from "./CategoryButton";
import BasicInfo from "./BasicInfo";
import LoadingScreen from "./LoadingScreen";
import { Link, Outlet } from "react-router-dom";

const PeriodicTable = () => {
  const [loading, setLoading] = useState(true);
  const [elements, setElements] = useState([]);
  const [basicInfo, setBasicInfo] = useState("");
  const [hoverCategory, setHoverCategory] = useState("");

  const fetchElement = async () => {
    try {
      const response = await axios.get(
        "https://elementease.onrender.com/elements"
      );
      // const response = await axios.get("http://localhost:5000/elements");
      setElements(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchElement();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  const noShowBasicInfo = () => {
    setBasicInfo("");
  };

  return (
    <div onMouseOut={noShowBasicInfo}>
      <div className="periodicTable">
        <div className="basicInfoBox">
          <BasicInfo element={basicInfo} />
        </div>
        <div className="categoryBtns">
          <CategoryButton onCategoryHover={setHoverCategory} />
        </div>
        {elements.map((element) => {
          const categoryHoverStyle = {
            transform: "scale(1,1)",
            "--color": "black",
            backgroundColor: colorCategory[element.category],
          };

          const elementStyle = {
            "--color": colorCategory[element.category],
            "--hover-background-color": colorCategory[element.category],
          };

          const hoveredCategoryStyle =
            hoverCategory === element.category ? categoryHoverStyle : {};

          return (
            <div
              key={element._id}
              className="elementCard"
              onMouseOver={() => setBasicInfo(element)}
              style={{
                gridRow: element.ypos,
                gridColumn: element.xpos,
                "--border-color": colorCategory[element.category],
                ...elementStyle,
                ...hoveredCategoryStyle,
              }}
            >
              <Link to={`/element/${element.number}`}>
                <h2>{element.number}</h2>
                <h1>{element.symbol}</h1>
                <h2>{element.name}</h2>
              </Link>
            </div>
          );
        })}
        <Outlet context={{ elements }} />
      </div>
    </div>
  );
};

export default PeriodicTable;
