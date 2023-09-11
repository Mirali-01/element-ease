require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const ElementRouter = require("./routes/ElementRoutes");
const dbConfig = require("./config/mongoDB");
const AllElements = require("./models/AllElements");
const Element = require("./models/Element");
const fs = require("fs");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(dbConfig.url, dbConfig.options)
  .then(async () => {
    console.log("Connected to MongoDB");

    // Check if data exists before seeding
    const allElementsCount = await AllElements.countDocuments();
    if (allElementsCount === 0) {
      try {
        const rawData = fs.readFileSync("template.json");
        const seedData = JSON.parse(rawData);

        await AllElements.create(seedData);

        // Extract elements from seedData and save them individually
        const elementsData = seedData.data;

        for (const elementData of elementsData) {
          await Element.create(elementData);
        }

        console.log("Seed data inserted");
      } catch (error) {
        console.error("Error reading or inserting data:", error);
      }
    } else {
      console.log("Database already contains data, skipping seed");
    }
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Use API routes
app.use("/", ElementRouter);

// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
