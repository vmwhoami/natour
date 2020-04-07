const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());
app.use(express.static("public"));

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

let newId = tours[tours.length - 1].id + 1;

app.get("/api/v1/tours", (req, res) => {
  res.status(200).json({
    status: "succes",
    rezultate: tours.length,
    data: {
      tours,
    },
  });
});

app.post("/api/v1/tours", (req, res) => {
  console.log(req.body);
  res.send("Gata facut");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
