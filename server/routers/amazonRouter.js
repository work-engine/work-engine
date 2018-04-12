// EXPRESS
const express = require('express');
const router = express.Router();

// CONTROLLERS
const dbController = require('../controllers/dbController');
const amazonController = require('../controllers/amazonController');

// ROUTE RETRIEVES - LIVE DATA FROM AMAZON BASED ON PASSED IN URL VALUE VIA JSON
router.post('/go', 
  amazonController.getProductsHtml,
  dbController.save,
  (req, res) => {
    console.log(`/go - about to return: ${res.locals.products}`);
    res.status(200).json(res.locals.products)
  }
);

// ROUTE RETRIEVES - STATIC DATA FROM FILES IN /server/controllers/amazonOptions FOLDER
router.post('/go/local/', 
  amazonController.getProductsHtmlLocal,
  dbController.save,
  (req, res) => {
    console.log(`/go/local/ - about to return: ${res.locals.products}`);
    res.status(200).json(res.locals.products);
  }
);

// ALL UNDEFINED ROUTES - Intercept all requests to an endpoint /api/* that aren't explicitly defined above
router.all('*', (req, res, next) => {
   err = new Error('apiRouter.js - default catch all route - not found');
   err.status = 404;
   next(err);
});

module.exports = router;