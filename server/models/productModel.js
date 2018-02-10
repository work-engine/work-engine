const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let productSchema = new Schema({
  name: String,
  asin: String,
  url: String,
  imageUrl: String,
  price: String,
  stars: String,
  starsCount: String,
});

module.exports = mongoose.model('product', productSchema);
