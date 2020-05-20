const Tour = require("./../models/tourModel");

exports.getAllTours = async (req, res) => {
  try {

    //Build a query
    const queryObj = { ...req.query }
    const excludeFields = ['page', 'sort', 'limit', 'fields']
    excludeFields.forEach(el => delete queryObj[el])
    console.log(req.query, queryObj);

    const query = Tour.find(queryObj)

    const tours = await query
    res.status(200).json({
      status: "succes",
      rezultate: tours.length,
      data: {
        tours,
      },
    });
  } catch (err) {
    res.status(440).json({
      status: "fail",
      error: err
    })
  }


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
exports.getSingleTour = async (req, res) => {

  try {
    const tour = await Tour.findById(req.params.id)
    //const tour = await Tour.findOne({_id:req.params.id})
    res.status(200).json({
      status: "succes",
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      error: "Tour not found"
    });
  }


};

exports.modifyTour = async (req, res) => {


  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    res.status(200).json({
      status: "succes",
      data: {
        tour
      },
    });

  } catch (err) {
    res.status(404).json({
      status: "fail",
      error: err
    });
  }




};

exports.deleteTour = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.params.id)

    res.status(204).json({
      status: "succes",
      message: tour.name + "deleted",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      error: err
    });
  }






};
