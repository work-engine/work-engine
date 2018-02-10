const mongoose = require('mongoose');
const Product = require('../models/productModel');
const io = require('socket.io');
const socketsController = require('./socketsController');
const dbController = {};

dbController.save = (req, res, next) => {
<<<<<<< HEAD
  let arr = [{"name":"[Sponsored]TaoTronics LED Desk Lamp, Eye-caring Table Lamps, Dimmable Office Lamp with USB Charging Port, Touch Control, 5 Color Modes, White, 12W, Official Member of Philips EnabLED Licensing Program","asin":"B00VUTAFR8","imageUrl":"./amazon_files/31WnqmqyKIL._AC_US200_.jpg","price":"29","stars":"4.8 out of 5 stars","startsCount":"6,540"},{"name":"[Sponsored]LE Dimmable LED Desk Lamp, 7 Dimming Levels, Eye-care, 8W, Touch Sensitive, Daylight White, Folding Table Lamps, Reading Lamps, Bedroom Lamps (Silver White)","asin":"B00VWLPRKO","imageUrl":"./amazon_files/31iaVFJNDVL._AC_US200_.jpg","price":"21","stars":"4.6 out of 5 stars","startsCount":"1,532"},{"name":"[Sponsored]LED Desk Lamp, TaoTronics Stylish Metal Table Lamps, Office Light with USB Charging Port, 5 Color Modes, 6 Brightness Levels, Memory/ Favorite Function, Timer, Night light","asin":"B01EJJDD10","imageUrl":"./amazon_files/31HXZhLezRL._AC_US200_.jpg","price":"64","stars":"4.8 out of 5 stars","startsCount":"Save 5% with coupon1,585"},{"name":"TaoTronics LED Desk Lamp, Eye-caring Table Lamps, Dimmable Office Lamp with USB Charging Port, Touch Control, 5 Color Modes, White, 12W, Official Member of Philips EnabLED Licensing Program","asin":"B00VUTAFR8","imageUrl":"./amazon_files/31WnqmqyKIL._AC_US200_.jpg","price":"29","stars":"4.8 out of 5 stars","startsCount":"6,540"},{"name":"TaoTronics LED Desk Lamp with Wireless Charger, Standard Charge for iPhone X / 8 / 8 Plus / Nexus / Xperia & Fast Charge for Galaxy S8 / S8+ / S7 / S7 Edge, 5 modes & 7 Brightness Levels, USB Port","asin":"B078HQZ8ZQ","imageUrl":"./amazon_files/31XDRMbzr4L._AC_US200_.jpg","price":"39","stars":"4.5 out of 5 stars","startsCount":"15"}];
  // Create a promises for each element saved in the db
  let promises = arr.map(elem => {
    return new Promise((resolve, reject) => {
      Product.create({
        productName: elem.name
      }).then(product => {
        console.log('Product has been successfully saved: ', product);
        // socketsController.emit(product);
        resolve(product);
      }).catch(err => {
        reject(err);
      });
    });
  });

  Promise.all(promises)
    .then(success => {
      console.log('All of the promises have been resolved!');
    });
  next();
=======
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
>>>>>>> 080665c76989eb33dee333b34392e10473f2113e
}


module.exports = dbController;