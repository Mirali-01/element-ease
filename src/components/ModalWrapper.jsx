import React from "react";
import colorCategory from "../models/ColorCategory";

const ModalWrapper = ({ element }) => {
  return (
    <div className="modalWrapper">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modal"
        style={{
          color: colorCategory[0][element.category],
          border: `0.5vh solid ${colorCategory[0][element.category]}`,
        }}
      >
        <div className="imgBox">
          <a href={element.source} target="_blank" rel="noreferrer">
            <img
              className="wiki"
              style={{ borderColor: colorCategory[0][element.category] }}
              src="https://cdn-icons-png.flaticon.com/512/5968/5968992.png"
              alt=""
            />
          </a>
        </div>

        <h3>{element.number}</h3>
        <h1>{element.symbol}</h1>
        <h3>{element.name}</h3>
        <div className="elementModal">
          Summary <hr />
          <p>{element.summary}</p>
          <br />
          <div className="moreInfo">
            <p>
              Atomic Mass:{" "}
              <strong>
                {Math.round(1000 * element.atomic_mass) / 1000}
                g/mol (amu)
              </strong>
            </p>
            <p>Discovered By: {element.discovered_by}</p>
            <p>Phase: {element.phase}</p>
            <p style={{ textTransform: "capitalize" }}>
              Type: {element.category}
            </p>
            <p>
              Ionization Energies:{" "}
              <strong>{element.ionization_energies[0]} kJ/mol</strong>
              {/* add dropdown converter for eV*/}
            </p>
            <p>
              Density:{" "}
              <strong>
                {element.density} g/cm<sup>3</sup>
              </strong>
            </p>
            <p>
              Electron Configuration:{" "}
              <strong>{element.electron_configuration}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalWrapper;