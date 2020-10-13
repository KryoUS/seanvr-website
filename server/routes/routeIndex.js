const routes = require('express').Router();

// Controllers
const amazon = require('../controllers/amazon');
const googleSheets = require('../controllers/google-sheets/google-sheets');

//Amazon Gallery
routes.get('/api/gallery', amazon.getList);
routes.get('/api/stream/goals', googleSheets.getSheetData);

module.exports = routes;