const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let productSchema = new Schema({
  proudctName: String,
  productLink: String,
  productImg: String,
  price: Number,
  stars: Number,
});

module.exports = mongoose.model('product', productSchema);