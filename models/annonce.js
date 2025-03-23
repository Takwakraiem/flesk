const mongoose = require("mongoose");
const schema = mongoose.Schema;

const annoncesSchema = new schema({
  name: { type: String },
  description: { type: String },
});

const Annonces = mongoose.model("Annonces", annoncesSchema);
module.exports = Annonces;
