const express = require('express');
const router = express.Router();

// CONTROLLERS
const historyController = require('../controllers/historyController');

router.post('/save', historyController.save, (req, res) => {
    console.log('History has been passed to historyRouter', req.body);
    return res.json(req.body);
});

module.exports = router;


