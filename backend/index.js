const express = require('express');
const saveItem = require('./controller/saveItem');
const getAll = require('./controller/getAll');
const update = require('./controller/update');
const getOne = require('./controller/getOne');
const deleteItem = require('./controller/delete');


const cors = require('cors');

const app = express();
const sequelize = require('./config/dbconfig');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

sequelize.sync()
  .then(() => {
    console.log('Database synced');
  })
  .catch((err) => {
    console.error('Database sync error:', err);
  });

// app.get('/items', allItem);
app.use('/items', saveItem);
app.use('/items', getAll);
app.use('/items', update);
app.use('/items',getOne);
app.use('/items',deleteItem);




app.listen(3000, () => {
    console.log('hi i am started');
})