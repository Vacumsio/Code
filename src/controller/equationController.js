const equationService = require("../service/equationService");

// eslint-disable-next-line no-multi-assign
module.exports = equationController = {
  getAll: async (req, res, next) => {
    try {
      const equations = await equationService.getAll();
      res.json(equations);
    } catch (error) {
      next(error);
    }
  },
  getById: async (req, res, next) => {
    try {
      const equation = await equationService.getById(req.params.id);
      res.json(equation);
    } catch (error) {
      next(error);
    }
  },
  create: async (req, res, next) => {
    try {
      const equation = await equationService.create(req.body);
      res.json(equation);
    } catch (error) {
      next(error);
    }
  },
  update: async (req, res, next) => {
    try {
      const equation = await equationService.update(req.params.id, req.body);
      res.json(equation);
    } catch (error) {
      next(error);
    }
  },
  delete: async (req, res, next) => {
    try {
      const equation = await equationService.delete(req.params.id);
      res.json(equation);
    } catch (error) {
      next(error);
    }
  },
};
