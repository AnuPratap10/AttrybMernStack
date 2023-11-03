// routes/inventoryRoutes.js

const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

// Define the route to add a new inventory entry
router.post('/', inventoryController.addInventory);



module.exports = router;
