import colorCategory from "../models/ColorCategory";

const ModalWrapper = ({ element }) => {
  const handleShellOptions = () => {
    if (!element.shells.length)
      return (
        <option value={null}>
          <b>N/A</b>
        </option>
      );
    return element.shells.map((shell, index) => (
      <option key={index} value={shell}>
        <b>{`${shell} (${index + 1})`}</b>
      </option>
    ));
  };

  // Function to create an array of option elements
  const handleIonizationEnergyOptions = () => {
    if (!element.ionization_energies.length)
      return (
        <option value={null}>
          <b>N/A</b>
        </option>
      );
    return element.ionization_energies.map((energy, index) => (
      <option key={index} value={energy}>
        <b>{`${energy} kJ/mol (${index})`}</b>
      </option>
    ));
  };
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
              src="/assets/images/wiki-icon.png"
              alt="wiki link to element"
              attribute="https://cdn-icons-png.flaticon.com/512/5968/5968992.png"
            />
          </a>
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
      </div>
    </div>
  );
};

export default ModalWrapper;
