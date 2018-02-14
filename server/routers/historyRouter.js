const express = require('express');
const router = express.Router();

// CONTROLLERS
const historyController = require('../controllers/historyController');

router.post('save', historyController.save, (res, req) => {
    res.statusCode(200).json(res.locals.history);
});


