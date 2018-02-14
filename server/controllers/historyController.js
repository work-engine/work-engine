const mongoose = require('mongoose');
const History = require('../models/historyModel');

const historyController = {};

// Saves the keyword searches into the history mongodb
historyController.save = (req, res, next) => {
    searches = req.body;
    console.log('These are the searches', searches);
    
    // todo: Need to get the user ID from cookies? lo
    const promises = searches.map(search => {
     return new Promise((resolve, reject) => {
      History.create({
        // userID: string,
        keyword: search.keyword,
        minPrice: search.minPrice,
        maxPrice: search.maxPrice,
        starRating: search.starRating,
      })
      .then(history => {
        console.log("History has been successfully saved: ", history);
        resolve(history);
      })
      .catch(err => {
        reject(err);
      });
     });
    });

    Promise.all(promises)
     .then(success => {
        console.log("All of the promises have been resolved: ", success);
        res.locals.saved = success; // Not sure if we need this.
        return next();
    });
};

historyController.retrieve = (req, res, next) => {
    //todo: Need to get the user ID from cookies
    // const userID;
    History.find({}, (err, findResults) => {
        if(err) console.log(err);
        res.locals.history = findResults;
        return next();
    });
};

module.exports = historyController;