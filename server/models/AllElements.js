const mongoose = require("mongoose");
const Element = require("../models/Element");

const allElementsSchema = new mongoose.Schema({
  data: [Element.schema],
});

const allElements = mongoose.model("AllElements", allElementsSchema);

module.exports = allElements;
