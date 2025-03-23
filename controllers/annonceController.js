const Annonces = require("../models/annonce");

// Add a new annonce
const createAnnonce = async (req, res) => {
  try {
    console.log(req.body,"req.body")
    let newAnnonce = new Annonces(req.body);
    console.log(newAnnonce,"newAnnonce")
    const result = await newAnnonce.save();
    res.send({ annonce: result, msg: "Annonce added" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Failed to add annonce" });
  }
};

// Get all annonces
const getAllAnnonces = async (req, res) => {
  try {
    let result = await Annonces.find();
    res.send({
      annonces: result,
      msg: "All annonces retrieved",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Failed to retrieve annonces" });
  }
};

// Get annonce by ID
const getAnnonceById = async (req, res) => {
    try {
      const { id } = req.query; // Récupération de l'ID depuis req.query
      if (!id) {
        return res.status(400).send({ msg: "ID is required" });
      }
      console.log("result")

      let result = await Annonces.findById(id);
      if (!result) {
        return res.status(404).send({ msg: "Annonce not found" });
      }
  
      res.send({
        annonce: result,
        msg: "Annonce retrieved by ID",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({ msg: "Failed to retrieve annonce by ID" });
    }
  };
  

// Update annonce by ID
const updateAnnonceById = async (req, res) => {
    try {
      const { id } = req.query; // Récupération de l'ID depuis req.query
  
      if (!id) {
        return res.status(400).send({ msg: "ID is required" });
      }
  
      let result = await Annonces.findByIdAndUpdate(
        id, // Utilisation directe de l'ID
        { $set: { ...req.body } },
        { new: true } // Retourne le document mis à jour
      );
  
      if (!result) {
        return res.status(404).send({ msg: "Annonce not found" });
      }
  
      res.send({ updatedAnnonce: result, msg: "Annonce updated" });
    } catch (error) {
      console.log(error);
      res.status(500).send({ msg: "Failed to update annonce" });
    }
  };
  

// Delete annonce by ID
const deleteAnnonceById = async (req, res) => {
    try {
      const { id } = req.query; // Récupération de l'ID depuis req.query
  
      if (!id) {
        return res.status(400).send({ msg: "ID is required" });
      }
  
      const result = await Annonces.findByIdAndDelete(id);
  
      if (!result) {
        return res.status(404).send({ msg: "Annonce not found" });
      }
  
      res.send({ msg: "Annonce deleted" });
    } catch (error) {
      console.log(error);
      res.status(500).send({ msg: "Failed to delete annonce" });
    }
  };
  

// Delete all annonces
const deleteAllAnnonces = async (req, res) => {
  try {
    await Annonces.deleteMany({
      confirmed: req.body.confirmed,
    });
    res.send({ msg: "All annonces deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Failed to delete all annonces" });
  }
};

module.exports = {
    createAnnonce,
    getAllAnnonces,
    getAnnonceById,
    updateAnnonceById,
    deleteAnnonceById

};
