import colorCategory from "../models/ColorCategory";
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";
import { useEffect, useRef } from "react"; //

const ModalWrapper = ({ element, enableScroll }) => {
  const modalContentRef = useRef(null);
  const modelViewerRef = useRef(null);

  useEffect(() => {
    const handleBodyScroll = (e) => {
      if (!enableScroll) return;
      e.preventDefault();
      if (modalContentRef.current) {
        modalContentRef.current.scrollTop += e.deltaY;
      }
    };

    document.body.addEventListener("wheel", handleBodyScroll, {
      passive: false,
    });

    return () => {
      document.body.removeEventListener("wheel", handleBodyScroll);
    };
  }, [enableScroll]);

  useEffect(() => {
    const modelViewerElement = modelViewerRef.current;
    if (modelViewerElement) {
      modelViewerElement.addEventListener("load", (e) => {
        const material = modelViewerElement.model.materials[0];
        material.pbrMetallicRoughness.setBaseColorFactor(
          colorCategory[element.category]
        );
      });
    }
  }, [element.category]);

  const handleShellOptions = () => {
    if (!element.shells?.length)
      return (
        <option value={null}>
          <b>N/A</b>
        </option>
      );
    return element.shells?.map((shell, index) => (
      <option key={index} value={shell}>
        <b>{`${shell} (${index + 1})`}</b>
      </option>
    ));
  };

  const handleIonizationEnergyOptions = () => {
    if (!element.ionization_energies?.length)
      return (
        <option value={null}>
          <b>N/A</b>
        </option>
      );
    return element.ionization_energies?.map((energy, index) => (
      <option key={index} value={energy}>
        <b>{`${energy} kJ/mol (${index})`}</b>
      </option>
    ));
  };

  const slowScroll = (direction) => {
    if (modalContentRef.current) {
      const modalContent = modalContentRef.current;
      const scrollStep = 1;
      const scrollDelay = 5;
      let scrollPosition = modalContent.scrollTop;
      let scrolling = true;

      const stopScrolling = () => {
        scrolling = false;
      };

      modalContent.addEventListener("click", stopScrolling);

      const scrollDown = () => {
        if (scrollPosition < modalContent.scrollHeight && scrolling) {
          scrollPosition += scrollStep;
          modalContent.scrollTo(0, scrollPosition);
          setTimeout(scrollDown, scrollDelay);
        }
      };

      const scrollUp = () => {
        if (scrollPosition > 0 && scrolling) {
          // custom
          scrollPosition -= scrollStep + 2;
          modalContent.scrollTo(0, scrollPosition);
          setTimeout(scrollUp, scrollDelay);
          // easy but fast
          // modalContent.scrollTo({
          //   top: 0,
          //   behavior: "smooth",
          // });
        }
      };

      if (direction === "down") {
        scrollDown();
      } else if (direction === "up") {
        scrollUp();
      }

      modalContent.addEventListener("click", stopScrolling);
    }
  };

  return (
    <div className="modalWrapper">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        onDoubleClick={() => slowScroll("down")}
        className="modal"
        style={{
          color: colorCategory[element.category],
          border: `0.5vh solid ${colorCategory[element.category]}`,
        }}
        ref={modalContentRef}
      >
        <div className="wiki-wrapper">
          <a href={element.source} target="_blank" rel="noreferrer">
            <img
              className="wiki"
              style={{ borderColor: colorCategory[element.category] }}
              src="/assets/images/wiki-icon.png"
              alt="wiki link to element"
              attribute="https://cdn-icons-png.flaticon.com/512/5968/5968992.png"
            />
          </a>
          <div
            className="wiki scrolldown"
            style={{
              border: `0.3vh solid ${colorCategory[element.category]}`,
            }}
            onClick={() => slowScroll("down")}
          >
            <FaArrowDownLong size="3vh" style={{ color: "#ffffff" }} />
          </div>
        </div>
        <h3>{element.number}</h3>
        <h1>{element.symbol}</h1>
        <h3>{element.name}</h3>
        <div className="elementModal">
          Summary <hr />
          <p>{element.summary}</p>
          <div className="moreInfo">
            <div style={{ textAlign: "center" }}>
              <p>
                Block: <b>{element.block}</b>{" "}
              </p>
              <p>
                Period: <b>{element.period}</b>{" "}
              </p>
              <p>
                Group: <b>{element.group}</b>{" "}
              </p>
            </div>
            <p>
              Atomic Mass:{" "}
              <b>
                {`${Math.round(1000 * element.atomic_mass) / 1000} g/mol (amu)`}
              </b>
            </p>
            <p>{`Discovered By: ${element.discovered_by}`}</p>
            <p>{`Phase: ${element.phase}`}</p>
            <p>{`Boiling Point: ${
              element.boil ? `${element.boil} K` : "N/A"
            }`}</p>
            <p>{`Melting Point: ${
              element.melt ? `${element.melt} K` : "N/A"
            }`}</p>
            <p style={{ textTransform: "capitalize" }}>
              Type: {element.category}
            </p>
            <p>
              <label htmlFor="shells">Shells:</label>
              <select name="shells" id="shells">
                {handleShellOptions()}
              </select>
            </p>
            <p>
              <label htmlFor="ionization_energies">Ionization Energies:</label>
              <select name="ionization_energies" id="ionization_energies">
                {handleIonizationEnergyOptions()}
              </select>
            </p>
            <p>
              Density:{" "}
              <b>
                {element.density} g/cm<sup>3</sup>
              </b>
            </p>
            <p>
              Electron Configuration: <b>{element.electron_configuration}</b>
            </p>
            <p>
              Electron Configuration (Semantic):{" "}
              <b>{element.electron_configuration_semantic}</b>
            </p>
          </div>
        </div>
        <div>
          <model-viewer
            ref={modelViewerRef}
            src={element.bohr_model_3d}
            alt={element.name}
            ar
            ar-modes="webxr scene-viewer quick-look"
            camera-controls
            disable-tap
            disable-zoom
            tone-mapping="commerce"
            poster={element.bohr_model_image}
            shadow-intensity="1"
            autoplay
            camera-orbit="2.5deg 55deg 1.75m"
            field-of-view="20deg"
          />
        </div>
        <div
          className="wiki scrollup"
          style={{
            border: `0.4vh solid ${colorCategory[element.category]}`,
          }}
          onClick={() => slowScroll("up")}
        >
          <FaArrowUpLong size="4vh" style={{ color: "#ffffff" }} />
        </div>
      </div>
    </div>
  );
};

export default ModalWrapper;
