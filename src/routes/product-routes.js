'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controller');

//post, get, put, delete
//mesma rota para duas operações distintas
//200 - ok, 201 - created, 400 - bad request,
// 401 - não autenticado, 403 - acesso negado, 404 - not found, 500 - internal server error
router.get('/', controller.get);
router.get('/:slug', controller.getBySlug);
router.get('/admin/:id', controller.getById);
router.get('/tags/:tag', controller.getByTag);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/', controller.delete);

module.exports = router;