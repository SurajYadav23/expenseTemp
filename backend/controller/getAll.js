const express = require('express');
const Item = require('../models/Expense');

const router = express.Router();

router.get('/', (req, res) => {
    console.log('in get function');
    Item.findAll().then((items) => {
        res.json(items);
    })
        .catch((err) => {
            console.error('Error fetching data:', err);
            res.status(500).json({ error: 'An error occurred while fetching data.' });
        });
        
});
   
  

module.exports = router;