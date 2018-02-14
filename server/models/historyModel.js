const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mongoURI = "mongodb://localhost/history";
mongoose.connect(mongoURI);

const historySchema = new Schema({
  keyword: String,
  date: { type: Date, default: Date.now },
  minPrice: Number,
  maxPrice: Number,
  rating: Number,
});

module.exports = mongoose.model('history', historySchema);