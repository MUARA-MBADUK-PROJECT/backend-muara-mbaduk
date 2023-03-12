const { Router } = require('express');
const { ProductController } = require('./product.controllers');

const route = Router();

route.get('/', ProductController.get);
route.get('/:slug', ProductController.getBySlug);
route.post('/', ProductController.store);
route.put('/:slug', ProductController.update);
route.delete('/:slug', ProductController.delete);

module.exports = { productRoutes: route };
