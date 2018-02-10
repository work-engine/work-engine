const mongoose = require('mongoose');
const Product = require('../models/productModel');
const dbController = {};

dbController.save = (req, res, next) => {
  console.log('In db function');
  Product.create({
    productName: req.body.productName,
    productLink: req.body.productLink,
    productImg: req.body.productImg,
    price: req.body.price,
    stars: req.body.stars,
  }.then(product => {
    res.locals.product = product;
    next();
    return console.log('Product has been successfully saved: ', product);
  }).catch(err => {
    next(err);
  }));
}

module.exports = dbController;