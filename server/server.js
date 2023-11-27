const express = require("express");
const cors = require("cors");
const compression = require("compression");
const mongoose = require("mongoose");
const Element = require("./models/Element");
const AllElements = require("./models/AllElements");

const app = express();

app.use(express.json());
app.use(cors());
app.use(compression());

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

app.get("/elements", async (req, res) => {
  try {
    const elements = await Element.find();
    res.json(elements);
  } catch (error) {
    console.error("Error fetching elements:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/", async (req, res) => {
  try {
    const allElements = await AllElements.find();
    res.json(allElements[0]);
  } catch (error) {
    console.error("Error fetching elements:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
