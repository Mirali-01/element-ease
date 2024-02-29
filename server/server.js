const express = require("express");
const cors = require("cors");
const compression = require("compression");
const mongoose = require("mongoose");
const Element = require("./models/Element");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(compression());

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

app.get("/elements", async (req, res) => {
  const { category } = req.query;
  try {
    let elements;
    if (category) {
      elements = await Element.find({ category });
    } else {
      elements = await Element.find({});
    }
    res.json(elements);
  } catch (error) {
    console.error("Error fetching elements:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/element/:number", async (req, res) => {
  const { number } = req.params;

  try {
    const element = await Element.findOne({ number: parseInt(number) });

    if (!element) {
      return res.status(404).json({ message: "Element not found" });
    }

    res.json(element);
  } catch (error) {
    res.status(500).json({ message: "Error fetching element" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
