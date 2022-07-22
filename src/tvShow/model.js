const mongoose = require("mongoose")

const tvShowSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true,
  },
  actor: {
    type: String,
    default: "Not Specified"
  }
});

const TVShow = mongoose.model("TVShow", tvShowSchema);


module.exports = TVShow;