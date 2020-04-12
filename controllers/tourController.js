const Tour = require("./../models/tourModel");

exports.getAllTours = (req, res) => {
  res.status(200).json({
    // status: "succes",
    // requested: req.timerec,
    // rezultate: tours.length,
    // data: {
    //   tours,
    // },
  });
};

exports.createTour = async (req, res) => {
  // just for reference
  // const newtour = new Tour({});
  // newtour.save();
  try {
    const newtour = await Tour.create(req.body);

    res.status(201).json({
      status: "succes",
      data: {
        tour: newtour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
exports.getSingleTour = (req, res) => {
  // const id = req.params.id * 1;
  // const tour = tours.find((el) => el.id === id);

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
