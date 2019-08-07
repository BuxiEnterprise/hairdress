const express = require('express');
const body = require('body-parser');
const routes = require('./routes')
const app = express();
const { sequelize } = require('./models')

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.use(body.json(),routes);

app.listen(8080);