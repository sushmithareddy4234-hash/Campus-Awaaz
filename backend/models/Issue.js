const mongoose = require("mongoose");

const IssueSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  votes: {
    type: Number,
    default: 0
  }

});

module.exports = mongoose.model("Issue", IssueSchema);