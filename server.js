const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando o app
const app = express();
      app.use(express.json());

//iniciando o BD
mongoose.connect(
    'mongodb://localhost:27017/clientapi', 
    { useNewUrlParser: true }
);
requireDir('./src/models');

app.use('/', require('./src/routes'));

app.listen(3001);