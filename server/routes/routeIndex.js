const routes = require('express').Router();

// Controllers
const amazon = require('../controllers/amazon');

//Amazon Gallery
routes.get('/api/gallery', amazon.getList);

module.exports = routes;