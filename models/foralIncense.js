const mongoose = require("mongoose");

const foralSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  countInStock: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  brand:{
    type: String,
    required: true,
  },
  type:{
    type: String,
    required: true,
  },
  rating:{
    type: Number,
    required: true,
  }
});

const Product = mongoose.model("foralInsense", foralSchema);

module.exports = Product;