const mongoose = require("mongoose");

const ProductScheme = new mongoose.Schema({
  product_id: {
    type: Number,
    unique: true,
    required: [true, "Product id is required"],
  },
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  productImg: {
    type: String,
    required: [true, " Image is require "],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  new_price: {
    type: Number,
    required: [true, "New Price is required"],
  },
  old_price: {
    type: Number,
    required: [true, "Old Price is required"],
  },
  product_qty: {
    type: Number,
    required: [true, "Product quantity is required"],
  },
  category: {
    type: String,
    required: [true, "Category is required"],
  },
  sub_category: {
    type: String,

    required: [true, "Sub Category is required"],
  },
  ratings: {
    type: Number,
    required: [true, "rating is required"],
  },
  colors: {
    type: [String],
    required: [true, "Colors is required"],
  },
});

const ProductCollection = mongoose.model("products", ProductScheme);
module.exports = ProductCollection;
