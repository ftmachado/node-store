'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();
const router = express.Router();

// Conecta ao banco
mongoose.connect(config.connectionString);

// Carrega os models
const Product = require('./models/product-model');
const Customer = require('./models/customer-model');
const Order = require('./models/order-model');

// Carrega as rotas
const index = require('./routes/index');
const product = require('./routes/product-routes');
const customer = require('./routes/customer-routes');
const order = require('./routes/order-routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', index);
app.use('/products', product);
app.use('/customers', customer);
app.use('/orders', order);

module.exports = app;