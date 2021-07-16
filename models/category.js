const mongoose = require("mongoose");

const categoryScema = new mongoose.Schema({
    name: {
            type:String,
            required: true,
            minlength: 5,
            maxlength: 255,
            unique: true
        }

  });

  const Category = mongoose.model("Category", categoryScema);

  module.exports= Category