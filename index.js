require("dotenv").config();
const routes = require("./routes/routes.js");
const express = require("express");
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
const app = express();

app.use(express.json());
const PORT = 4060;
app.listen(PORT, () => {
  console.log(`Server Started at http://localhost:${PORT}`);
});
app.use("/", routes);
