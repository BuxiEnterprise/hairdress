const express = require('express');
// const Salon = require('./controller/');

const routes = new express.Router();

routes.get('/clients');
routes.get('/clients/:name');

module.exports = routes;