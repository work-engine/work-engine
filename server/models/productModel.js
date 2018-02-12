const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define Mongoose product schema
const productSchema = new Schema({
  keywords: String,
  name: String,
  asin: String,
  url: String,
  imageUrl: String,
  manufacturer: String,
  price: String,
  stars: String,
  reviews: String,
});

module.exports = mongoose.model('product', productSchema);
