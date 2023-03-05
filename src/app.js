const express = require("express");
// const path = require("path");
const equationRouter = require("./routes/equations");

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;
app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
});

// app.use(express.static(path.resolve(__dirname, "")));

// app.get("/", (request, response) => {
//   response.sendFile(path.resolve(__dirname, "/", "index.html"));
// });

app.use("/equations", equationRouter);
