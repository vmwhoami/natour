const fs = require("fs");

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

let newId = tours[tours.length - 1].id + 1;

exports.checkId = (req, res, next, id) => {
  console.log(`this is the ${id} id`);
  if (req.body.id * 1 > tours.length) {
    return res.status(404).json({
      status: "error",
      message: "Tour not found",
    });
  }
  next();
};

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: "succes",
    requested: req.timerec,
    rezultate: tours.length,
    data: {
      tours,
    },
  });
};

exports.createTour = (req, res) => {
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
};

exports.getSingleTour = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);
  // if (!tour) {
  //   return res.status(404).json({
  //     status: "error",
  //     message: "Tour not found",
  //   });
  // }
  res.status(200).json({
    status: "succes",
    data: {
      tour,
    },
  });
};

exports.modifyTour = (req, res) => {
  res.status(200).json({
    status: "succes",
    data: {
      tour: "< the upadted tour should be here ...>",
    },
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: "succes",
    data: null,
  });
};
