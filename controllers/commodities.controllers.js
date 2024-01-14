const express = require('express');
const router = express.Router();
const CommoditiesModel = require('../models/commodities.model');
const bodyParser = require('body-parser');
const cors = require('cors');

router.use(bodyParser.json());
router.use(cors);

// Create a new commodity (linked to a transaction)
router.post('/', async (req, res) => {
  try {
    const newCommodity = await CommoditiesModel.create(req.body);
    res.status(201).json(newCommodity);
  } catch (error) {
    console.error('Error creating commodity:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get all commodities
router.get('/', async (req, res) => {
  try {
    const commodities = await CommoditiesModel.find();
    res.status(200).json(commodities);
  } catch (error) {
    console.error('Error fetching commodities:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get a specific commodity by transaction ID
router.get('/:id', async (req, res) => {
  try {
    const commodity = await CommoditiesModel.findOne({ id: req.params.id });
    if (!commodity) {
      res.status(404).json({ error: 'Commodity not found' });
    } else {
      res.status(200).json(commodity);
    }
  } catch (error) {
    console.error('Error fetching commodity by transaction ID:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update a commodity by transaction ID
router.put('/:id', async (req, res) => {
  try {
    const updatedCommodity = await CommoditiesModel.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true }
    );
    if (!updatedCommodity) {
      res.status(404).json({ error: 'Commodity not found' });
    } else {
      res.status(200).json(updatedCommodity);
    }
  } catch (error) {
    console.error('Error updating commodity by transaction ID:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a commodity by transaction ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedCommodity = await CommoditiesModel.findOneAndDelete({ id: req.params.id });
    if (!deletedCommodity) {
      res.status(404).json({ error: 'Commodity not found' });
    } else {
      res.status(204).json(); // No content
    }
  } catch (error) {
    console.error('Error deleting commodity by transaction ID:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
