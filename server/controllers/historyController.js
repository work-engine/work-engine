const mongoose = require('mongoose');
const History = require('../models/historyModel');

const historyController = {};
const AmazonProductsDisplay = new AmazonProductsDisplay(this);
console.log('This is the amazon product display: ', AmazonProductsDisplay);

// Saves the keyword searches into the history mongodb
historyController.save = (req, res, next) => {
    searches = AmazonProductsDisplay.helper_createProductAsinsArray();
    // todo: Need to get the user ID from cookies? lo
    const promises = searches.map(search => {
     return new Promise((resolve, reject) => {
      History.create({
        // userID: string,
        keyword: search.keyword,
        minPrice: search.minPrice,
        maxPrice: search.maxPrice,
        starRating: search.starRating
      })
      .then(product => {
        console.log("Product has been successfully saved: ", product);
        resolve(product);
      })
      .catch(err => {
        reject(err);
      });
     });
    });

    Promise.all(promises)
     .then(success => {
        console.log("All of the promises have been resolved: ", success);
        res.locals.history = success; // Not sure if we need this.
        next();
    });
};

historyController.retrieveHistory = () => {
    //todo: Need to get the user ID from cookies
    // const userID;
    History.find({}, (err, findResults) => {
        return res.json(findResults);
    });
};

module.exports = historyController;