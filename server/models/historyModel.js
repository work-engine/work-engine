const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mongoURI = "mongodb://localhost/history";
mongoose.connect(mongoURI);

const historySchema = new Schema({
  amazonID: String,
  keyword: String,
  date: { type: Date, default: Date.now },
  minPrice: Number,
  maxPrice: Number,
  starRating: Number,
});

module.exports = mongoose.model('history', historySchema);