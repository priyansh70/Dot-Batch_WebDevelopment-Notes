// step1 - create folder
// step2 - move into that folder
// step3 - npm init -y
// step4 - open folder using vscode
// step5 - npm i express
// step6 - create server.js

const express = require("express");
const app = express();

// used to parse req.
const bodyParser = require("body-parser");
// parse JSON data & add it to the request.Body object
app.use(bodyParser.json());

app.listen(8000, () => {
  console.log("Server Establish at 3000 Port");
});

// Routes
app.get("/", (req, res) => {
  res.send("Sender");
});

app.post("/api/cars", (req, res) => {
  const { name, brand } = req.body;
  console.log(name);
  console.log(brand);
  res.send("Car Submitted");
});

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/Cars", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection established");
  })
  .catch((error) => console.log(error));
