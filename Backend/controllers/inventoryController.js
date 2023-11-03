const Inventory = require("../models/inventoryModel");

exports.getAllInventory = async (req, res) => {
  try {
    // Replace this comment with the code to fetch inventory entries from the database
    const inventory = await Inventory.find();

    // Respond with the fetched inventory entries as a JSON array
    res.status(200).json(inventory);
  } catch (error) {
    console.error("Error retrieving inventory entries:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.addInventory = async (req, res) => {
  try {
    const {
      carModel,
      kmsOnOdometer,
      majorScratches,
      originalPaint,
      accidentsReported,
      previousBuyers,
      registrationPlace,
    } = req.body;

    // Create a new Inventory entry
    const newInventoryEntry = new Inventory({
      carModel,
      kmsOnOdometer,
      majorScratches,
      originalPaint,
      accidentsReported,
      previousBuyers,
      registrationPlace,
    });

    // Save the new entry to the database
    const savedInventoryEntry = await newInventoryEntry.save();

    // Respond with a success status code and a JSON object
    res.status(201).json({
      message: "Inventory entry added successfully",
      inventory: savedInventoryEntry,
    });
  } catch (error) {
    console.error("Error adding inventory entry:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
