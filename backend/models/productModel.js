const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product Name."],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please enter product Description."],
  },
  price: {
    type: Number,
    required: [true, "Please enter product name."],
    maxLength: 8,
  },
  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
      publi_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please Enter Product Catagory "],
  },
  stock: {
    type: String,
    required: [true, "Please Enter Product Stock "],
    default: 1,
  },
  numOfReviews: {
    type: String,
    default: 0,
  },
  reviews: [
    {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: String,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports=mongoose.model("Prodect",productSchema);