const mongoose = require("mongoose");
const { Schema } = mongoose;
const datasetModel = new Schema({
  name: {
    type: String,
    reuired: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["M", "F"],
    default: "M",
  },
  city: {
    type: String,
  },
  fee: {
    type: String,
  },
  age: {
    type: Number,
  },
});

module.exports = mongoose.model("DataSet", datasetModel);
