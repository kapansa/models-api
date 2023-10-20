const express = require("express");
const models = require("./models.json");
const app = express();
const rounter = express.Router();
app.use("/api", rounter);

rounter.get("/message", (req, res) => {
  res.send({ message: "This is an API for getting Car models and Makes!" });
});

rounter.get("/", (req, res) => {
  const modelsList = [];

  models.map((car) => {
    modelsList.push({ model: car?.model, make: car?.make });
  });

  res.json(modelsList);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server is now running on PORT ${PORT}`);
});
