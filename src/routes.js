const express = require('express');
const routes = express.Router();
const ClientController = require('./controllers/ClientController');

routes.get('/clients', ClientController.listAll);
routes.post('/clients', ClientController.insert);

module.exports = routes;