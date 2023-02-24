const db = require("../config/db");

// eslint-disable-next-line no-multi-assign
module.exports = equationService = {
  getAll: async () => {
    const equations = await db("equations");
    return equations;
  },
  getById: async (id) => {
    const equation = await db("equations").where("id", id);
    return equation;
  },
  create: async (equation) => {
    const equations = await db("equations").insert(equation);
    return equations;
  },
  update: async (id, equation) => {
    const equations = await db("equations").where("id", id).update({
      expression: equation.expression,
      result: equation.result,
      client_ip: equation.client_ip,
    });
    return equations;
  },
  delete: async (id) => {
    const equations = await db("equations").where("id", id).del();
    return equations;
  },
};
