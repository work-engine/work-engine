const express = require('express');
const router = express.Router();

// CONTROLLERS
const historyController = require('../controllers/historyController');

router.post('/save', historyController.save, (req, res, next) => {
    console.log('History has been passed to historyRouter', req.locals.saved);
    return res.json(req.locals.saved);
});

router.get("/retrieve", historyController.retrieve, (req, res, next) => {
  console.log("History has been passed to historyRouter", res.locals.history);
  return res.json(res.locals.history);
});

module.exports = router;


