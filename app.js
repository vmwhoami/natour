const express = require("express");
const fs = require("fs");
const app = express();
const morgan = require("morgan");
app.use(express.json());
app.use(express.static("public"));

app.use(morgan("dev"));

app.use((req, res, next) => {
  console.log("hello from my midleware");
  next();
});
app.use((req, res, next) => {
  req.timerec = new Date().toISOString();
  next();
});

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

let newId = tours[tours.length - 1].id + 1;

//Tour functions
const getAllTours = (req, res) => {
  res.status(200).json({
    status: "succes",
    requested: req.timerec,
    rezultate: tours.length,
    data: {
      tours,
    },
  });
};

const createTour = (req, res) => {
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

const getSingleTour = (req, res) => {
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
};

const modifyTour = (req, res) => {
  if (req.body.id * 1 > tours.length) {
    return res.status(404).json({
      status: "error",
      message: "Tour not found",
    });
  }

  res.status(200).json({
    status: "succes",
    data: {
      tour: "< the upadted tour should be here ...>",
    },
  });
};

const deleteTour = (req, res) => {
  if (req.body.id * 1 > tours.length) {
    return res.status(404).json({
      status: "error",
      message: "Tour not found",
    });
  }

  res.status(204).json({
    status: "succes",
    data: null,
  });
};
//
//Users functions
const getUsers = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "Acest route nu este inca... ",
  });
};
const createUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "Acest route nu este inca... ",
  });
};

const getUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "Acest route nu este inca... ",
  });
};
const modifyUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "Acest route nu este inca... ",
  });
};
const deletUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "Acest route nu este inca... ",
  });
};
//Routes

const touRouter = express.Router();
const useRouter = express.Router();
app.use("/api/v1/tours", touRouter);
app.use("/api/v1/users", useRouter);

touRouter.route("/").get(getAllTours).post(createTour);
touRouter.route("/:id").get(getSingleTour).patch(modifyTour).delete(deleteTour);

useRouter.route("/").get(getUsers).post(createUser);
useRouter.route("/:id").get(getUser).patch(modifyUser).delete(deletUser);
// starting server
const port = 3000;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
