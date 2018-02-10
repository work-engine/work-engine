const mongoose = require('mongoose');
const Product = require('../models/productModel');
const dbController = {};

dbController.save = (req, res, next) => {
  console.log('In db function');
  Product.create({
    name: req.body.productName,
    asin: req.body.productAsin,
    url: req.body.productUrl,
    imageUrl: req.body.productImgUrl,
    price: req.body.productPrice,
    stars: req.body.productStars,
    starsCount: req.body.starsCount,
  }.then(product => {
    res.locals.product = product;
    next();
    return console.log('Product has been successfully saved: ', product);
  }).catch(err => {
    next(err);
  }));
}


module.exports = dbController;