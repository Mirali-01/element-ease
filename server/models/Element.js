const mongoose = require("mongoose");

const elementSchema = new mongoose.Schema({
  shells: [Number],
  ionization_energies: [Number],
  name: String,
  appearance: String,
  atomic_mass: Number,
  boil: Number,
  category: String,
  color: String,
  density: Number,
  discovered_by: String,
  melt: Number,
  molar_heat: Number,
  named_by: String,
  number: Number,
  period: Number,
  phase: String,
  source: String,
  spectral_img: String,
  summary: String,
  symbol: String,
  xpos: Number,
  ypos: Number,
  electron_configuration: String,
  electron_affinity: Number,
  electronegativity_pauling: Number,

  // Missing properties and their data types:
  group: Number,
  bohr_model_image: String,
  bohr_model_3d: String,
  wxpos: Number,
  wypos: Number,
  electron_configuration_semantic: String,
  cpk_hex: String,
  image: {
    title: String,
    url: String,
    attribution: String,
  },
  block: String,
});

const Element = mongoose.model("Element", elementSchema);

module.exports = Element;
