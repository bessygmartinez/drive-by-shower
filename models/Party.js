const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const PartiesSchema = new Schema({
  partyName: {
    type: String,
    required: true
  },
  partySize: {
    type: String,
    required: true
  },
  partyAddress: {
    type: String,
    required: true
  },
  partyEmail: {
    type: String,
    required: true
  },
  partyTime: {
    type: String,
    required: true
  }
});

module.exports = Party = mongoose.model("parties", PartiesSchema);