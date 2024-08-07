import axios from "axios";
import { useState, useEffect } from "react";
import LoadingScreen from "../components/LoadingScreen";
import BasicInfo from "./BasicInfo";
import StudyCategoryButton from "./StudyCategoryButton";
import colorCategory from "../models/ColorCategory";
import { Link, Outlet } from "react-router-dom";

const StudyMode = () => {
  const [loading, setLoading] = useState(true);
  const [elements, setElements] = useState([]);
  const [values, setValues] = useState({ number: "", symbol: "", name: "" });
  const [matchingElements, setMatchingElements] = useState([]);
  const [showAllElements, setShowAllElements] = useState(false);
  const [popupStates, setPopupStates] = useState({});
  const [submitStatus, setSubmitStatus] = useState("");
  const [hoverCategory, setHoverCategory] = useState("");
  const [clickedCategories, setClickedCategories] = useState([]);
  const [basicInfo, setBasicInfo] = useState("");
  const [message, setMessage] = useState("");

  const fetchElement = async () => {
    try {
      const response = await axios.get(
        "https://elementease.onrender.com/elements"
      );
      setElements(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchElement();
  }, []);

  useEffect(() => {
    const savedMatchingElements = JSON.parse(
      localStorage.getItem("matchingElements")
    );
    if (savedMatchingElements) {
      setMatchingElements(savedMatchingElements);
    }
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const response = await axios.get(
        `https://elementease.onrender.com/element/${values.number}`
      );
      if (
        `${response.data.number}` === values.number.trim() &&
        response.data.symbol.toLowerCase() ===
          values.symbol.trim().toLowerCase() &&
        response.data.name.toLowerCase() === values.name.trim().toLowerCase()
      ) {
        if (
          !matchingElements.some((element) => element._id === response.data._id)
        ) {
          const updatedMatchingElements = [
            ...matchingElements,
            response.data,
          ].sort((a, b) => a.number - b.number);
          setMatchingElements(updatedMatchingElements);
          localStorage.setItem(
            "matchingElements",
            JSON.stringify(updatedMatchingElements)
          );
          setValues({ number: "", symbol: "", name: "" });
          setSubmitStatus("correct");
          setTimeout(() => {
            setSubmitStatus("");
          }, 1000);
        } else {
          setMessage("You've solved this element already!");
          setTimeout(() => {
            setMessage("");
          }, 1500);
        }
      } else {
        console.error("Incorrect input values");
        setSubmitStatus("incorrect");
        setTimeout(() => {
          setSubmitStatus("");
        }, 1000);
      }
    } catch (error) {
      console.error("Error fetching matching elements:", error);
    }
  };

  const categoryCount = () => {
    const categories = Object.keys(colorCategory);
    const compareCategories = {};

    for (const category of categories) {
      const currentCategoryCount = matchingElements.filter(
        (element) => element.category === category
      );
      const totalCategoryCount = elements.filter(
        (element) => element.category === category
      );
      compareCategories[category] = [
        currentCategoryCount.length,
        totalCategoryCount.length,
      ];
    }
    return compareCategories;
  };

  const countedCategory = categoryCount();

  const handleElementReset = (id) => {
    const updatedMatchingElements = matchingElements.filter(
      (element) => element._id !== id
    );
    setMatchingElements(updatedMatchingElements);
    localStorage.setItem(
      "matchingElements",
      JSON.stringify(updatedMatchingElements)
    );
    const updatedCategories = [...clickedCategories];
    const categoryToUpdate = elements.find(
      (element) => element._id === id
    ).category;
    const categoryCountAfterReset = updatedMatchingElements.filter(
      (element) => element.category === categoryToUpdate
    ).length;

    const totalCategoryCount = elements.filter(
      (element) => element.category === categoryToUpdate
    ).length;

    if (categoryCountAfterReset < totalCategoryCount) {
      const categoryIndex = updatedCategories.indexOf(categoryToUpdate);
      if (categoryIndex !== -1) {
        updatedCategories.splice(categoryIndex, 1);
      }
      setClickedCategories(updatedCategories);
    }
    setBasicInfo("");
  };

  const handlePeriodicTableReset = (e) => {
    e.preventDefault();
    const isConfirmed = window.confirm(
      "Are you sure you want to clear the Periodic Table?"
    );
    if (isConfirmed) {
      setMatchingElements([]);
      localStorage.removeItem("matchingElements");
    }
  };

  const handleShowAll = async () => {
    setShowAllElements(true);
  };

  const handleResetShowAll = () => {
    setShowAllElements(false);
  };

  const togglePopup = (elementId) => {
    const updatedPopupStates = {};
    Object.keys(popupStates).forEach((key) => {
      updatedPopupStates[key] = false;
    });
    updatedPopupStates[elementId] = !popupStates[elementId];
    setPopupStates(updatedPopupStates);
  };

  const noShowBasicInfo = () => {
    setBasicInfo("");
  };

  return (
    <div onClick={() => setPopupStates({})}>
      <div className="periodicTable">
        {basicInfo ? (
          <BasicInfo element={basicInfo} />
        ) : (
          <div className={`basicInputBox ${submitStatus}`}>
            {message && <p className="message">{message}</p>}
            <form className="basicInput" onSubmit={handleSubmit}>
              <button
                style={{ width: "20%", margin: "0 auto" }}
                type="reset"
                onClick={() => setValues({ number: "", symbol: "", name: "" })}
              >
                X
              </button>
              <input
                onChange={handleChange}
                type="text"
                inputMode="numeric"
                pattern="\d*"
                name="number"
                placeholder="number"
                required
                value={values.number}
              />
              <input
                onChange={handleChange}
                type="text"
                name="symbol"
                placeholder="symbol"
                required
                value={values.symbol}
              />
              <input
                onChange={handleChange}
                type="text"
                name="name"
                placeholder="name"
                required
                value={values.name}
              />
              <button type="submit" style={{ width: "60%", margin: "0 auto" }}>
                Submit
              </button>
              <button
                onClick={handlePeriodicTableReset}
                style={{ width: "60%", margin: "0 auto" }}
              >
                Clear Periodic Table
              </button>
            </form>
          </div>
        )}
        <StudyCategoryButton
          countedCategory={countedCategory}
          showAllElements={showAllElements}
          onCategoryHover={setHoverCategory}
          clickedCategories={clickedCategories}
          setClickedCategories={setClickedCategories}
        />
        <button
          onMouseOver={handleShowAll}
          onMouseOut={handleResetShowAll}
          className="showAll"
        >
          Show All
        </button>
        <div className="hints">
          Click any empty box for a hint. Solve for each category.
        </div>
        {elements.map((element) => (
          <div
            key={element._id}
            className="gridElement"
            style={{
              gridRow: element.ypos,
              gridColumn: element.xpos,
              color: colorCategory[element.category],
              borderColor: showAllElements
                ? colorCategory[element.category]
                : "#ffffffa0",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {showAllElements && (
              <a>
                <h2>{element.number}</h2>
                <h1>{element.symbol}</h1>
                <h2>{element.name}</h2>
              </a>
            )}
            {popupStates[element._id] && (
              <div className="popup">
                <span className="popuptext">{element.hint}</span>
              </div>
            )}
            <span
              className="popupTrigger"
              onClick={() => togglePopup(element._id)}
            >
              Hint
            </span>
          </div>
        ))}
        {matchingElements.map((element) => {
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
                  "--color": "#ffffffa0",
                  "--border-color": "#ffffffa0",
                }
              : {};

          const showAllStyle = showAllElements
            ? {
                "--color": clickedCategories.includes(element.category)
                  ? "#000"
                  : colorCategory[element.category],
                "--border-color": colorCategory[element.category],
              }
            : {};

          return (
            <div
              key={element._id}
              className="studyElementCard"
              onMouseOver={() => setBasicInfo(element)}
              onMouseOut={noShowBasicInfo}
              style={{
                gridRow: element.ypos,
                gridColumn: element.xpos,
                "--border-color": colorCategory[element.category],
                ...elementStyle,
                ...dimStyle,
                ...hoveredCategoryStyle,
                ...clickedCategoryStyle,
                ...showAllStyle,
              }}
            >
              <button
                className="resetElement"
                onClick={() => handleElementReset(element._id)}
                style={{ "--color": "#fff" }}
              >
                X
              </button>
              <Link to={`/study/element/${element.number}`}>
                <h2>{element.number}</h2>
                <h1>{element.symbol}</h1>
                <h2>{element.name}</h2>
              </Link>
            </div>
          );
        })}
        <Outlet context={{ countedCategory, matchingElements, elements }} />
      </div>
    </div>
  );
};

export default StudyMode;
