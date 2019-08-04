const express = require('express');
const Salon = require('./controller/SalonController');

const routes = new express.Router();

routes.get('/clients',Salon.index);
routes.get('/clients/:name');

module.exports = routes;