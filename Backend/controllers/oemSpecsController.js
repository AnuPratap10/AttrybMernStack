

const {OEMSpecs} = require("../models/oemSpecsModel");

// controllers/oemSpecsController.js



// exports.countOEMModels = async (req, res) => {
  
//     try {
//       // Implement logic to count the number of available OEM models from your database
//       const count = await YourModel.countDocuments(); // Replace with your database model and logic
  
//       // Set the content type to JSON
//       res.setHeader('Content-Type', 'application/json');
  
//       // Respond with a JSON object containing the count
//       res.json({ count });
//     } catch (error) {
//       console.error('Error counting OEM models:', error);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   };
  
  

// controllers/oemSpecsController.js

// exports.countUniqueOEMModels = async (req, res) => {
//   try {
//     // Use the distinct() method to get unique car models
//     const uniqueModels = await OEMSpecs.distinct('modelName');

//     // Count the number of unique car models
//     const count = uniqueModels.length;

//     // Respond with the count as JSON
//     res.json({ count });
//   } catch (error) {
//     console.error('Error counting unique OEM models:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };





// controllers/oemSpecsController.js

// controllers/oemSpecsController.js

// exports.searchOEMSpecs = async (req, res) => {
//     try {
//       // Extract car model and year from the request (e.g., req.query or req.params)
//       const { carModel, year } = req.query;
  
//       // Implement logic to search for OEM specifications in your database
//       const specifications = await YourModel.find({ modelName: carModel, yearOfModel: year }); // Replace with your database model and logic
  
//       // Set the content type to JSON
//       res.setHeader('Content-Type', 'application/json');
  
//       if (specifications.length === 0) {
//         res.status(404).json({ error: 'No matching specifications found' });
//       } else {
//         // Respond with a JSON array of specifications
//         res.json(specifications);
//       }
//     } catch (error) {
//       console.error('Error searching for OEM specifications:', error);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   };
  
  




  

exports.getAllOEMSpecs = async (req, res) => {
  try {
    const oemSpecs = await OEMSpecs.find();
    res.status(200).json(oemSpecs);
  } catch (error) {
    console.error('Error retrieving OEM specifications:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.addOEMSpecs = async (req, res) => {
  const {
    modelName,
    yearOfModel,
    listPrice,
    availableColors,
    mileage,
    powerInBHP,
    maxSpeed,
  } = req.body;

  try {
    const newOEMSpecs = new OEMSpecs({
      modelName,
      yearOfModel,
      listPrice,
      availableColors,
      mileage,
      powerInBHP,
      maxSpeed,
    });

    const savedOEMSpecs = await newOEMSpecs.save();
    res.status(201).json(savedOEMSpecs);
  } catch (error) {
    console.error("Error adding OEM specifications:", error);
    res.status(500).json({error: "Internal server error"});
  }
};
