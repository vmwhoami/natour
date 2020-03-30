const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;
const axios = require("axios");
app.use(express.json());
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

let newId = tours[tours.length - 1].id + 1;

app.get("/api/v1/tours", (req, res) => {
  res.status(200).json({
    status: "succes",
    rezultate: tours.length,
    data: {
      tours
    }
  });
});

app.post("/api/v1/tours", (req, res) => {
  console.log(req.body);
  res.send("Gata facut");
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
