const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const annoncesSchema = new Schema({
  marque: { type: String },
  etat: { type: String },
  carburant: { type: String },
  transmission: { type: String },
  description: { type: String },
  prix: { type: Number },
  annee: { type: Number },
  isSponsored: { type: Boolean },
  sponsoringPackId: { type: Number },
  imageUrls: { type: [String] }, 
});

const Annonces = mongoose.model("Annonces", annoncesSchema);
module.exports = Annonces;
