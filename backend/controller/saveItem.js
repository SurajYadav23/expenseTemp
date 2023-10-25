const express = require('express');
const Item = require('../models/Expense');


const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post('/', async (req, res) => {
    const item = req.body;
    Item.create(item)
  .then((createdItem) => {
    console.log('Database save:');
    console.log('Name:', createdItem.name);
    console.log('Description:', createdItem.desc);
    console.log('Price:', createdItem.price);
    console.log('Quantity:', createdItem.quantity);
    // Add other properties as needed

    res.status(201).json(createdItem);
  })
  .catch((err) => {
    console.error('Error saving to the database:', err);
    res.status(500).json({ error: 'An error occurred while saving to the database.' });
  });

    

   
  
});

module.exports = router;