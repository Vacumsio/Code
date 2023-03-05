const db = require("../config/db");

const equationService = {
  getAll: async () => {
    const equations = await db("equations");
    return equations;
  },
  create: async (equation) => {
    const equations = await db("equations").insert(equation);
    return equations;
  },
};

module.exports = equationService;
