import { Helmet } from "react-helmet-async";
import ModalWrapper from "./ModalWrapper";
import {
  Link,
  useNavigate,
  useOutletContext,
  useSearchParams,
} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import colorCategory from "../models/ColorCategory";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const StudyCategoryModal = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const [categoryElements, setCategoryElements] = useState([]);
  const navigate = useNavigate();
  const { countedCategory } = useOutletContext();

  const fetchCategory = async (category) => {
    try {
      const response = await axios.get(
        `https://elementease.onrender.com/elements?category=${category}`
      );
      // const response = await axios.get(
      //   `http://localhost:5000/elements?category=${category}`
      // );
      setCategoryElements(response.data);
    } catch (error) {
      console.error("Error fetching elements:", error);
    }
  };

  useEffect(() => {
    fetchCategory(category);
  }, [category]);

  const solvedCategories = {};

  let i = 0;

  for (const category in countedCategory) {
    const [solvedCount, totalCount] = countedCategory[category];
    if (solvedCount === totalCount) {
      solvedCategories[category] = i++;
    }
  }

  useEffect(() => {
    if (!category || solvedCategories[category] === undefined) {
      navigate("/study");
    }
  }, [category, navigate]);

  const stopPropagating = (e) => e.stopPropagation();

  const categoryTitle = () => {
    let title = "";
    if (category) {
      title = category
        .split(" ")
        .map((word) => {
          return word[0].toUpperCase() + word.substring(1);
        })
        .join(" ");
    }
    return (
      <>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <h1 className="modalHeader">{title}</h1>
      </>
    );
  };

  const categoryList = Object.keys(solvedCategories);
  const totalCategories = categoryList.length - 1;

  const revCategoryList = {};
  for (const key in categoryList) {
    revCategoryList[categoryList[key]] = key;
  }

  useEffect(() => {
    disableScroll();
    return () => {
      enableScroll();
    };
  }, []);

  const enableScroll = () => {
    document.body.classList.remove("disable-scroll");
  };

  const disableScroll = () => {
    document.body.classList.add("disable-scroll");
  };

  const handleModalClick = () => {
    enableScroll();
    navigate("/study");
  };

  return (
    <div
      className="modalContainer"
      style={{ color: colorCategory[category] }}
      onClick={handleModalClick}
    >
      {categoryTitle()}
      <div className="carousel">
        <Link
          to={`/study/elements?category=${
            revCategoryList[category] * 1 === 0
              ? categoryList[totalCategories]
              : categoryList[revCategoryList[category] * 1 - 1]
          }`}
          className="left"
          onClick={stopPropagating}
        >
          <div
            className="left"
            style={{
              border: `0.40vh solid ${colorCategory[category]}`,
            }}
          >
            <FaArrowLeftLong size="5.5vh" style={{ color: "#ffffff" }} />
          </div>
        </Link>
        <div
          onClick={stopPropagating}
          className="modalCategories"
          style={{ border: `0.5vh solid ${colorCategory[category]}` }}
        >
          {categoryElements.map((element) => (
            <ModalWrapper
              key={element.number}
              element={element}
              enableScroll={false}
            />
          ))}
        </div>
        <Link
          to={`/study/elements?category=${
            revCategoryList[category] * 1 === totalCategories
              ? categoryList[0]
              : categoryList[revCategoryList[category] * 1 + 1]
          }`}
          className="right"
          onClick={stopPropagating}
        >
          <div
            className="right"
            style={{
              border: `0.40vh solid ${colorCategory[category]}`,
            }}
          >
            <FaArrowRightLong size="5.5vh" style={{ color: "#ffffff" }} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default StudyCategoryModal;
