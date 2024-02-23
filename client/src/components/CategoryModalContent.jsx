import { Helmet } from "react-helmet-async";
import ModalWrapper from "./ModalWrapper";

const CategoryModalContent = ({ elements, element, onClose }) => {
  const categoryElements = elements.filter(
    (elem) => elem.category === element.category
  );

  const title = element.category
    .split(" ")
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");

  return (
    <div
      className="modalContainer"
      style={{ color: element.color }}
      onClick={onClose}
    >
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <h1 className="modalHeader">{element.category}</h1>
      <div>
        <div
          onClick={(e) => e.stopPropagation()}
          className="modalCategories"
          style={{ border: `0.5vh solid ${element.color}` }}
        >
          {categoryElements.map((elem) => (
            <ModalWrapper key={elem.number} element={elem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryModalContent;
