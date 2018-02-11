// EXPRESS
const express = require('express');
const router = express.Router();

// CONTROLLERS
const amazonController = require('../controllers/amazonController');

// Handle GET requests to 'amazon'
router.get('/', 
  amazonController.getProductsHtml,
  (req, res) => res.send(res.locals.amazonHtml)
);

// Handle GET requests to 'amazon/local'
router.get('local/', 
  amazonController.getProductsHtmlLocal,
  (req, res) => res.json(res.locals.products)
);

// ALL UNDEFINED ROUTES - Intercept all requests to an endpoint /api/* that aren't explicitly defined above
router.all('*', (req, res, next) => {
  err = new Error('apiRouter.js - default catch all route - not found');
  err.status = 404;
  next(err);
});

module.exports = router;