// Allows us to use router functionality of express
const express = require('express');
const router = express.Router();

// Import sockets functions
const socketsController = require('../controllers/socketsController');
// Import nightmare functions
const nightmareController = require('../controllers/nightmareController');
// Import db functions
const dbController = require('../controllers/dbController');

// Handle POST request to '/api/go' containing user input data which will
// initiate a web socket connection with the client and a nightmare instance
// router.post('/api/go', 
//   nightmareController.init,
//   (req, res) => res.status(200)
// );

// Handle POST request to '/api/recieve' containing information sent by
// nightmare

router.post('/receive',
  dbController.save,
  (req, res) => res.status(200).send('Success')
);

// Intercept all requests to an endpoint without a route within '/api' 
router.all('*', (req, res, next) => {
   err = new Error('apiRouter.js - default catch all route - not found');
   err.status = 404;
   next(err);
});

module.exports = router;