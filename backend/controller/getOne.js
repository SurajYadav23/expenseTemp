const express = require('express');
const router = express.Router();
const Item = require('../models/Expense');

router.get('/:id', (req, res) => {
    const itemId = req.params.id; 
    Item.findOne({ where: { id: itemId } })
      .then((item) => {
        if (item) {
          res.json(item);
        } else {
          res.status(404).json({ error: 'Item not found' });
        }
      })
      .catch((err) => {
        console.error('Error fetching item by ID:', err);
        res.status(500).json({ error: 'An error occurred while fetching the item.' });
      });
  });
  
  module.exports = router;