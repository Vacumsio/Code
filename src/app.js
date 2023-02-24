const express = require("express");
const equationRouter = require("./routes/equations");

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running on port 3000");
  // app.use("/equation", equationRouter);
});

app.use("/equations", equationRouter);
