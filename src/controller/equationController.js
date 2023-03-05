const equationService = require("../service/equationService");

const equationController = {
  getAll: async (req, res) => {
    try {
      const equation = await equationService.getAll();
      res.status(201).json(equation);
    } catch (error) {
      // console.error(error);
      res.status(404).json("Data you were searching are missing");
    }
  },
  create: async (req, res) => {
    try {
      const equation = await equationService.create(req.body);
      res.status(201).json(equation);
    } catch (error) {
      // console.error(error);
      res.status(500).json("Something went wrong");
    }
  },
};

module.exports = equationController;
