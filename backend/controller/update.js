const express = require('express');
const router = express.Router();
const Item  = require('../models/Expense');

router.put('/:id', (req, res) => {
    const itemId = req.params.id;
    const updatedItem = req.body;
    Item.update(updatedItem, {
        where: { id: itemId },
    })
        .then((result) => {
            if (result[0] === 1) {
                res.json({ message: 'Item updated successfully' });
            } else {
                res.status(404).json({ error: 'Item not found' });
            }
        })
        .catch((err) => {
            console.error('Error updating item:', err);
            res.status(500).json({ error: 'An error occurred while updating the item.' });
        });
});

module.exports = router;