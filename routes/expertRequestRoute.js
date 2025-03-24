const express = require("express");
const { createExpertRequest, getAllExpertRequests, getExpertRequestById, updateExpertRequestById, deleteExpertRequestById } = require("../controllers/expertRequestController");

const ExpertRequestRouter = express.Router();

ExpertRequestRouter.post("/add", createExpertRequest);
ExpertRequestRouter.get("/getAllExpertRequests", getAllExpertRequests);
ExpertRequestRouter.get("/getExpertRequestById/:id", getExpertRequestById);
ExpertRequestRouter.put("/updateExpertRequestById/:id", updateExpertRequestById);
ExpertRequestRouter.delete("/deleteExpertRequestById/:id", deleteExpertRequestById);

module.exports = ExpertRequestRouter;
