const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const expertRequestsSchema = new Schema({
  nom: { type: String },
  bio: { type: String },
  filePath: { type: String },
  status: { type: String },
  url: { type: String },
});

const expertRequests = mongoose.model("expertRequests", expertRequestsSchema);
module.exports = expertRequests;
