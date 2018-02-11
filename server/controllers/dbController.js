// Import dependencies for db
const mongoose = require('mongoose');
const Product = require('../models/productModel');
const dbController = {};

// Save each results into db
dbController.save = (req, res, next) => {
  // Create a promises for each element saved in the db
  let promises = res.locals.products.map(elem => {
    return new Promise((resolve, reject) => {
      Product.create({
        name: elem.name,
        asin: elem.asin,
        url: elem.url,
        imageUrl: elem.imageUrl,
        price: elem.price,
        stars: elem.stars,
        starsCount: elem.starsCount
      }).then(product => {
        console.log('Product has been successfully saved: ', product);
        resolve(product);
      }).catch(err => {
        reject(err);
      });
    });
  });
  // Invoke all of the promises at the same time, and if all of the 
  // promises resolve, then set 'res.locals.products' to the result 
  Promise.all(promises)
    .then(success => {
      console.log('All of the promises have been resolved: ', success);
      res.locals.products = success;
      next();
    });
}

module.exports = dbController;