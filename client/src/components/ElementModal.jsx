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

const ElementModal = () => {
  const navigate = useNavigate();
  const { number } = useParams();
  const [element, setElement] = useState([]);
  const { elements } = useOutletContext();

  const fetchElement = async (number) => {
    try {
      const response = await axios.get(
        `https://elementease.onrender.com/element/${number}`
      );
      // const response = await axios.get(
      //   `http://localhost:5000/element/${number}`
      // );
      setElement(response.data);
    } catch (error) {
      console.error("Error fetching element:", error);
    }
  };

  useEffect(() => {
    fetchElement(number);
  }, [number]);

  useEffect(() => {
    // Check if the number is not present or is outside the valid range
    // Redirect to Periodic Table home page
    if (!number || isNaN(number) || number < 1 || number > elements.length) {
      navigate("/");
    }
  }, [number, elements, navigate]);

  const stopPropagating = (e) => e.stopPropagation();

  return (
    <div className="modalContainer" onClick={() => navigate("/")}>
      <Helmet>
        <title>{`${element.number} | ${element.symbol} - ${element.name}`}</title>
      </Helmet>
      <h1
        className="modalHeader"
        style={{ color: colorCategory[0][element.category] }}
      >
        Scroll Down For More Information
      </h1>
      <div className="downArrow">
        <img
          src="../assets/images/double-arrow-down.png"
          alt="scroll down"
          attribute="https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/chevron-double-down-512.png"
        />
      </div>
      <div className="carousel">
        <Link
          to={`/element/${
            element.number - 1 === 0 ? elements.length : element.number - 1
          }`}
          className="left"
          onClick={stopPropagating}
        >
          <div
            className="left"
            style={{
              border: `0.40vh solid ${colorCategory[0][element.category]}`,
            }}
          >
            <FaArrowLeftLong size="5.5vh" style={{ color: "#ffffff" }} />
          </div>
        </Link>
        <ModalWrapper element={element} />
        <Link
          to={`/element/${
            element.number + 1 === elements.length + 1 ? 1 : element.number + 1
          }`}
          className="right"
          onClick={stopPropagating}
        >
          <div
            className="right"
            style={{
              border: `0.40vh solid ${colorCategory[0][element.category]}`,
            }}
          >
            <FaArrowRightLong size="5.5vh" style={{ color: "#ffffff" }} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ElementModal;
