const express = require('express');
const Salon = require('./controller/SalonController');
const routes = new express.Router();

routes.post('/clients', Salon.Store);

module.exports = routes;