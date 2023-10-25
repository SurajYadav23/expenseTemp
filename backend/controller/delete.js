const express = require('express');
const router = express.Router();
const Item = require('../models/Expense');

router.delete('/:id', (req, res) => {
    const itemId = req.params.id; 
    Item.destroy({ where: { id: itemId } })
      .then((result) => {
        if (result === 1) {
          res.json({ message: 'Item deleted successfully' });
        } else {
          res.status(404).json({ error: 'Item not found' });
        }
      })
      .catch((err) => {
        console.error('Error deleting item by ID:', err);
        res.status(500).json({ error: 'An error occurred while deleting the item.' });
      });
  });
  
  module.exports = router;