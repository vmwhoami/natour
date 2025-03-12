// Mock temporary data storage
let tours = [
  { id: 1, name: "Forest Hiker", price: 297 },
  { id: 2, name: "The Snow Adventurer", price: 497 },
];

// Get all tours
exports.getTours = (req, res) => {
  res.status(200).json({
    status: "success",
    results: tours.length,
    data: {
      tours
    }
  });
};

// Create new tour
exports.createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  
  tours.push(newTour);
  
  res.status(201).json({
    status: "success",
    data: {
      tour: newTour
    }
  });
};

// Get single tour
exports.getTour = (req, res) => {
  const id = req.params.id * 1; // Convert string to number
  const tour = tours.find(el => el.id === id);

  if (!tour) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID"
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      tour
    }
  });
};

// Update tour
exports.updateTour = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find(el => el.id === id);

  if (!tour) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID"
    });
  }

  Object.assign(tour, req.body);
  
  res.status(200).json({
    status: "success",
    data: {
      tour
    }
  });
};

// Delete tour
exports.deleteTour = (req, res) => {
  const id = req.params.id * 1;
  const initialLength = tours.length;
  tours = tours.filter(el => el.id !== id);

  if (tours.length === initialLength) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID"
    });
  }

  res.status(204).json({
    status: "success",
    data: null
  });
};