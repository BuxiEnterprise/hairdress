const express = require('express');
const Salon = require('./controller/SalonController');

const routes = new express.Router();

routes.post('/clients' ,Salon.Store);
routes.get('/clients', Salon.Index);
routes.get('/clients/:name',Salon.srcName);

module.exports = routes;