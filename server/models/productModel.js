const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define Mongoose product schema
const productSchema = new Schema({
  name: String,
  asin: String,
  url: String,
  imageUrl: String,
  price: String,
  stars: String,
  starsCount: String,
});

module.exports = mongoose.model('product', productSchema);