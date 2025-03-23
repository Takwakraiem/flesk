const express = require("express");
const { createAnnonce, getAllAnnonces, getAnnonceById, updateAnnonceById, deleteAnnonceById } = require("../controllers/annonceController");
const annonceRouter = express.Router();


annonceRouter.post("/add", createAnnonce);
annonceRouter.get("/getAllannonce", getAllAnnonces);
annonceRouter.get("/getAnnonceById",getAnnonceById);
annonceRouter.put("/updateAnnonceById",updateAnnonceById);
annonceRouter.delete("/deleteAnnonceById",deleteAnnonceById);

module.exports = annonceRouter;
