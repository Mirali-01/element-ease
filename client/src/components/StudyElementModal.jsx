import { Helmet } from "react-helmet-async";
import colorCategory from "../models/ColorCategory";
import ModalWrapper from "./ModalWrapper";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import {
  useNavigate,
  useParams,
  Link,
  useOutletContext,
} from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const StudyElementModal = () => {
  const navigate = useNavigate();
  const { number } = useParams();
  const [element, setElement] = useState([]);
  const { matchingElements, elements } = useOutletContext();

  const fetchElement = async (number) => {
    try {
      const response = await axios.get(
        `https://elementease.onrender.com/element/${number}`
      );
      // const response = await axios.get(
      //   `http://localhost:5000/study/element/${number}`
      // );
      setElement(response.data);
    } catch (error) {
      console.error("Error fetching element:", error);
    }
  };

  useEffect(() => {
    fetchElement(number);
  }, [number]);

  const allMatchedElements = Object.entries(matchingElements);
  const revMatchingElements = {};
  for (const [key, value] of allMatchedElements) {
    revMatchingElements[value.number] = key * 1;
  }

  useEffect(() => {
    if (
      !number ||
      isNaN(number) ||
      number < 1 ||
      number > elements.length ||
      number * 1 !== matchingElements[revMatchingElements[number]]?.number
    ) {
      navigate("/study");
    }
  }, [number, elements, navigate]);

  const stopPropagating = (e) => e.stopPropagation();

  return (
    <div
      className="modalContainer"
      onClick={() => {
        navigate("/study");
      }}
    >
      <Helmet>
        <title>{`${element.number} | ${element.symbol} - ${element.name}`}</title>
      </Helmet>
      <h1
        className="modalHeader"
        style={{ color: colorCategory[element.category] }}
      >
        Scroll Popup For More Information
      </h1>
      <div className="downArrow">
        <img
          src="/assets/images/double-arrow-down.png"
          alt="scroll down"
          attribute="https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/chevron-double-down-512.png"
        />
      </div>
      <div className="carousel">
        <Link
          to={`/study/element/${
            revMatchingElements[element.number] - 1 === -1
              ? matchingElements[matchingElements.length - 1].number
              : matchingElements[revMatchingElements[element.number] - 1]
                  ?.number
          }`}
          className="left"
          onClick={stopPropagating}
        >
          <div
            className="left"
            style={{
              border: `0.40vh solid ${colorCategory[element.category]}`,
            }}
          >
            <FaArrowLeftLong size="5.5vh" style={{ color: "#ffffff" }} />
          </div>
        </Link>
        <ModalWrapper element={element} enableScroll={true} />
        <Link
          to={`/study/element/${
            revMatchingElements[element.number] * 1 + 1 ===
            matchingElements.length
              ? matchingElements[0].number
              : matchingElements[revMatchingElements[element.number] + 1]
                  ?.number
          }`}
          className="right"
          onClick={stopPropagating}
        >
          <div
            className="right"
            style={{
              border: `0.40vh solid ${colorCategory[element.category]}`,
            }}
          >
            <FaArrowRightLong size="5.5vh" style={{ color: "#ffffff" }} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default StudyElementModal;
