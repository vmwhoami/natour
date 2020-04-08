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
  let newtour = Object.assign({ id: newId }, req.body);
  tours.push(newtour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: "succes",
        data: {
          tour: newtour,
        },
      });
    }
  );
});

app.get("/api/v1/tours/:id", (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);
  if (!tour) {
    return res.status(404).json({
      status: "error",
      message: "Tour not found",
    });
  }
  res.status(200).json({
    status: "succes",
    data: {
      tour,
    },
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
