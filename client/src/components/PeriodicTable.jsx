import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import axios from "axios";
import CategoryButton from "./CategoryButton";
import BasicInfo from "./BasicInfo";
import ModalContent from "./ModalContent";
import ElementGrid from "./ElementGrid";
import LoadingScreen from "./LoadingScreen";

const PeriodicTable = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedElem, setSelectedElem] = useState({});
  const [basicInfo, setBasicInfo] = useState("");
  const [hoverCategory, setHoverCategory] = useState("");

  const [loading, setLoading] = useState(true);
  const [elementData, setElementData] = useState({});

  const fetchElement = async () => {
    try {
      const response = await axios.get("https://elementease.onrender.com");
      const { data } = response.data;
      setElementData(data);
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

  return (
    <div
      onMouseOut={() => {
        setBasicInfo("");
      }}
    >
      <div className="periodicTable">
        <div className="basicInfoBox">
          <BasicInfo basicInfo={basicInfo} />
        </div>
        <div className="categoryBtns">
          <CategoryButton
            elements={elementData}
            onCategoryHover={setHoverCategory}
          />
        </div>
        <ElementGrid
          element={elementData}
          basicInfo={basicInfo}
          showModal={showModal}
          setShowModal={setShowModal}
          setSelectedElem={setSelectedElem}
          hoverCategory={hoverCategory}
          setBasicInfo={setBasicInfo}
        />
      </div>
      {showModal &&
        createPortal(
          <ModalContent
            element={selectedElem}
            onClose={() => setShowModal(false)}
          />,
          document.body
        )}
    </div>
  );
};

export default PeriodicTable;
