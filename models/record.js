const mongoose = require("mongoose");
const Category = require("../models/category")

const recordScema = new mongoose.Schema({
    name: {
            type:String,
            required: true,

        },
    discription: String,
    record: String,
    photo: String,
    video: String,
    category:  {type: mongoose.Schema.Types.ObjectId, ref: 'Category',required:true}


  });

  const Record = mongoose.model("record", recordScema);

  module.exports= Record