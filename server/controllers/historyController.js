const mongoose = require('mongoose');
const History = require('../models/historyModel');

const historyController = {};

// Saves the keyword searches into the history mongodb
historyController.save = (req, res, next) => {
    searches = req.body;
    console.log("This is the request cookies", req.cookies);
    
    // todo: Need to get the user ID from cookies? lo
    const promises = searches.map(search => {
     return new Promise((resolve, reject) => {
      History.create({
        // userID: string,
        amazonID: req.cookies.amazonID,
        keyword: search.keyword,
        minPrice: search.minPrice,
        maxPrice: search.maxPrice,
        starRating: search.starRating,
      })
      .then(history => { 
        resolve(history);
      })
      .catch(err => {
        reject(err);
      });
     });
    });

    Promise.all(promises)
     .then(success => {
        res.locals.products = success;
       next();
     });
};

historyController.retrieve = (req, res, next) => {
    //todo: Need to get the user ID from cookies
    console.log('Session Session: ========================>', req.cookies);
    
    History.find({ amazonID: req.cookies.amazonID }, (err, findResults) => {
        if(err) console.log(err);
        res.locals.history = findResults;
        return next();
    });
};

// historyController.retrieveMostRecentSearch = () => {
//   // RETRIEVE MOST RECENT SEARCH ITEMS IN HISTORY
//   let lastObj; 
//   History.find({}, function(err, result){
//     //let sliced = JSON.parse(result); 
//     lastObj = result.pop();
//     return lastObj; 
//     //console.log("LASTOBJ: ", lastObj);
//     // let slicedRes = [];
//     // slicedRes.push(sliced[0], sliced[1]); 
//     // console.log("DB TESTING TESTING TESTING!!!!!!", lastObj);
//   });
// }

module.exports = historyController;