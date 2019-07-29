const express = require('express');
const Sequelize = require('sequelize');
const body = require('body-parser');

const app = express();

const sequelize = new Sequelize('hairdress','root','2585963741', {host:'localhost', dialect:'mysql'})

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.use(body.json(),require('./routes'));

app.listen(8080);