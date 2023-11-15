const express = require("express");
const cors = require("cors");
const compression = require("compression");
const mongoose = require("mongoose");
const dbConfig = require("./config/mongoDB");
const ElementRouter = require("./routes/ElementRoutes");

const app = express();

app.use(express.json());
app.use(cors());
app.use(compression());

mongoose
  .connect(dbConfig.url, dbConfig.options)
  .then(console.log("Connected to MongoDB"))
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.use("/", ElementRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
