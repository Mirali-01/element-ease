import colorCategory from "../models/ColorCategory";
import { useState, useEffect } from "react";
import axios from "axios";
import CategoryButton from "../components/CategoryButton";
import BasicInfo from "../components/BasicInfo";
import LoadingScreen from "../components/LoadingScreen";
import { Link, Outlet } from "react-router-dom";

const PeriodicTable = () => {
  const [loading, setLoading] = useState(true);
  const [elements, setElements] = useState([]);
  const [basicInfo, setBasicInfo] = useState("");
  const [hoverCategory, setHoverCategory] = useState("");
  const [clickedCategories, setClickedCategories] = useState([]);

  const fetchElement = async () => {
    try {
      const response = await axios.get(
        "https://elementease.onrender.com/elements"
      );
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
        <BasicInfo element={basicInfo} />
        <CategoryButton
          onCategoryHover={setHoverCategory}
          clickedCategories={clickedCategories}
          setClickedCategories={setClickedCategories}
        />
        <Link to={"/study"}>
          <button className="showAll">Study Mode</button>
        </Link>
        {elements.map((element) => {
          const categoryHoverStyle = {
            "--color": "#000",
            backgroundColor: colorCategory[element.category],
            "--border-color": colorCategory[element.category],
          };

          const elementStyle = {
            "--color": colorCategory[element.category],
            "--hover-background-color": colorCategory[element.category],
          };

          const hoveredCategoryStyle =
            hoverCategory && hoverCategory === element.category
              ? categoryHoverStyle
              : {};

          const clickedCategoryStyle =
            clickedCategories.length &&
            clickedCategories.includes(element.category)
              ? categoryHoverStyle
              : {};

          const dimStyle =
            (hoverCategory && hoverCategory !== element.category) ||
            (clickedCategories.length &&
              !clickedCategories.includes(element.category))
              ? {
                  "--color": "#ffffffcf",
                  "--border-color": "#ffffffcf",
                }
              : {};

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
                ...dimStyle,
                ...hoveredCategoryStyle,
                ...clickedCategoryStyle,
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
