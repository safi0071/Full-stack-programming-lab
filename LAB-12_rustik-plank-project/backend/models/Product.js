const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: String,
  image: String,
  category: String,
  description: String,
  price: Number,
  countInStock: Number,
});

module.exports = mongoose.model('Product', productSchema);