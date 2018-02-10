// EXPRESS
const express = require('express');
const router = express.Router();

// CONTROLLERS
const dbController = require('../controllers/dbController');
const amazonController = require('../controllers/amazonController');

// ROUTES
router.post('/go', 
  amazonController.getProductsHtmlLocal,
  dbController.save,
  (req, res) => {
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