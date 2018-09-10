'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

// Conecta ao banco
mongoose.connect('mongodb://ftmachado:prof2016@ds249942.mlab.com:49942/nodestore');

// Carrega os models
const Product = require('./models/product-model');

// Carrega as rotas
const index = require('./routes/index');
const product = require('./routes/product-routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', index);
app.use('/products', product);

module.exports = app;