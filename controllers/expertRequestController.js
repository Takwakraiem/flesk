const ExpertRequests = require("../models/expertRequest");

// Add a new expertRequest
const createExpertRequest = async (req, res) => {
  try {
    let newExpertRequest = new ExpertRequests(req.body);
    const result = await newExpertRequest.save();
    res.send({ expertRequest: result, msg: "Expert Request added" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Failed to add Expert Request" });
  }
};

// Get all ExpertRequests
const getAllExpertRequests = async (req, res) => {
  try {
    let result = await ExpertRequests.find();
    res.send({ ExpertRequests: result, msg: "All Expert Requests retrieved" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Failed to retrieve Expert Requests" });
  }
};

// Get ExpertRequest by ID
const getExpertRequestById = async (req, res) => {
    try {
      const { id } = req.params; // Correction ici
      if (!id) {
        return res.status(400).send({ msg: "ID is required" });
      }

      let result = await ExpertRequests.findById(id);
      if (!result) {
        return res.status(404).send({ msg: "Expert Request not found" });
      }

      res.send({ expertRequest: result, msg: "Expert Request retrieved by ID" });
    } catch (error) {
      console.log(error);
      res.status(500).send({ msg: "Failed to retrieve Expert Request by ID" });
    }
};

// Update ExpertRequest by ID
const updateExpertRequestById = async (req, res) => {
    try {
      const { id } = req.params; // Correction ici

      let result = await ExpertRequests.findByIdAndUpdate(
        id,
        { $set: req.body },
        { new: true }
      );

      if (!result) {
        return res.status(404).send({ msg: "Expert Request not found" });
      }

      res.send({ updatedExpertRequest: result, msg: "Expert Request updated" });
    } catch (error) {
      console.log(error);
      res.status(500).send({ msg: "Failed to update Expert Request" });
    }
};

// Delete ExpertRequest by ID
const deleteExpertRequestById = async (req, res) => {
    try {
      const { id } = req.params; // Correction ici

      const result = await ExpertRequests.findByIdAndDelete(id);

      if (!result) {
        return res.status(404).send({ msg: "Expert Request not found" });
      }

      res.send({ msg: "Expert Request deleted" });
    } catch (error) {
      console.log(error);
      res.status(500).send({ msg: "Failed to delete Expert Request" });
    }
};

module.exports = {
    createExpertRequest,
    getAllExpertRequests,
    getExpertRequestById,
    updateExpertRequestById,
    deleteExpertRequestById
};
