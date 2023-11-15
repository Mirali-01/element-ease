import React, { useState } from "react";

const allElements = [
  "Hydrogen",
  "Helium",
  "Lithium",
  "Beryllium",
  "Boron",
  "Carbon",
  "Nitrogen",
  "Oxygen",
  "Fluorine",
  "Neon",
  "Sodium",
  "Magnesium",
  "Aluminum",
  "Silicon",
  "Phosphorus",
  "Sulfur",
  "Chlorine",
  "Argon",
  "Potassium",
  "Calcium",
  "Scandium",
  "Titanium",
  "Vanadium",
  "Chromium",
  "Manganese",
  "Iron",
  "Cobalt",
  "Nickel",
  "Copper",
  "Zinc",
  "Gallium",
  "Germanium",
  "Arsenic",
  "Selenium",
  "Bromine",
  "Krypton",
  "Rubidium",
  "Strontium",
  "Yttrium",
  "Zirconium",
  "Niobium",
  "Molybdenum",
  "Technetium",
  "Ruthenium",
  "Rhodium",
  "Palladium",
  "Silver",
  "Cadmium",
  "Indium",
  "Tin",
  "Antimony",
  "Tellurium",
  "Iodine",
  "Xenon",
  "Cesium",
  "Barium",
  "Lanthanum",
  "Cerium",
  "Praseodymium",
  "Neodymium",
  "Promethium",
  "Samarium",
  "Europium",
  "Gadolinium",
  "Terbium",
  "Dysprosium",
  "Holmium",
  "Erbium",
  "Thulium",
  "Ytterbium",
  "Lutetium",
  "Hafnium",
  "Tantalum",
  "Tungsten",
  "Rhenium",
  "Osmium",
  "Iridium",
  "Platinum",
  "Gold",
  "Mercury",
  "Thallium",
  "Lead",
  "Bismuth",
  "Polonium",
  "Astatine",
  "Radon",
  "Francium",
  "Radium",
  "Actinium",
  "Thorium",
  "Protactinium",
  "Uranium",
  "Neptunium",
  "Plutonium",
  "Americium",
  "Curium",
  "Berkelium",
  "Californium",
  "Einsteinium",
  "Fermium",
  "Mendelevium",
  "Nobelium",
  "Lawrencium",
  "Rutherfordium",
  "Dubnium",
  "Seaborgium",
  "Bohrium",
  "Hassium",
  "Meitnerium",
  "Darmstadtium",
  "Roentgenium",
  "Copernicium",
  "Nihonium",
  "Flerovium",
  "Moscovium",
  "Livermorium",
  "Tennessine",
  "Oganesson",
];

const RandomWikiElement = () => {
  const getRandomElement = () => {
    const randomIndex = Math.floor(Math.random() * allElements.length);
    return allElements[randomIndex];
  };
  const [randomElement, setRandomElement] = useState(() => getRandomElement());

  const handleImageClick = () => {
    const newRandomElement = getRandomElement();
    setRandomElement(newRandomElement);
  };
  return (
    <div className="randomWikiElementContainer">
      <div
        className="downArrow"
        style={{ transform: "scale(0.75, 0.75) rotate(-90deg)" }}
      >
        <img
          src="assets/images/double-arrow-down.png"
          alt="scroll down"
          attribute="https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/chevron-double-down-512.png"
        />
      </div>
      <div className="randomWikiElement">
        <a
          href={`https://en.wikipedia.org/wiki/${randomElement}`}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="randomWikiElement-img"
            src="assets/images/react-icon.png"
            alt="React"
            attribute="https://icons-for-free.com/iconfiles/png/512/design+development+facebook+framework+mobile+react+icon-1320165723839064798.png"
            onClick={handleImageClick}
          />
        </a>
      </div>
    </div>
  );
};

export default RandomWikiElement;
