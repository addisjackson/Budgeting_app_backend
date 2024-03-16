const express = require('express');
const router = express.Router();
const commoditiesQueries = require('../queries/commodityQueries');
const cors = require('cors');
const bodyParser = require('body-parser');

// Check if you need bodyParser, or use express.json() if using Express v4.16.0 and above
router.use(bodyParser.json());
router.use(cors()); //
router.use(express.json());


// Create a new commodity
router.post('/', (req, res) => {
  try {
    const newCommodity = req.body;
    const createdCommodity = commoditiesQueries.createCommodity(newCommodity);
    res.status(201).json(createdCommodity);
  } catch (error) {
    console.error('Error creating commodity:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get all commodities
router.get('/', (req, res) => {
  // Check if a sorting order is provided in query parameters
  const sortOrder = req.query.sortOrder || 'asc';
  const allCommodities = commoditiesQueries.getAllSortedCommodities(sortOrder);
  res.json(allCommodities);
});

// Get a specific commodity by transaction ID
router.get('/:id', (req, res) => {
  const transactionId = parseInt(req.params.id);
  const commodity = commoditiesQueries.getCommodityById(transactionId);

  if (commodity) {
    res.json(commodity);
  } else {
    res.status(404).json({ message: 'Commodity not found' });
  }
});

// Update a commodity by transaction ID
router.put('/:id', (req, res) => {
  const transactionId = parseInt(req.params.id);
  const updatedCommodity = req.body;
  const result = commoditiesQueries.updateCommodity(transactionId, updatedCommodity);

  if (result.success) {
    res.json(result.updatedCommodity);
  } else {
    res.status(404).json({ message: 'Commodity not found' });
  }
});

// Delete a commodity by transaction ID
router.delete('/:id', (req, res) => {
  const transactionId = parseInt(req.params.id);
  const result = commoditiesQueries.deleteCommodity(transactionId);

  if (result.success) {
    res.status(204).json(); // No content
  } else {
    res.status(404).json({ message: 'Commodity not found' });
  }
});

module.exports = router;
