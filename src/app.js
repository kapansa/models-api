const express = require("express");
const cars = require(__dirname + "/List.js");

const app = express();
const rounter = express.Router();
app.use("/api", rounter);

rounter.get("/message", (req, res) => {
  res.send({ message: "This is an API for getting Car models and Makes!" });
});

rounter.get("/", (req, res) => {
  //   const models = [];
  //   const makes = [];

  //   cars.map((car) => {
  //     if (!(models.indexOf(car.model) !== -1)) {
  //       models.push(car.model);
  //     }
  //     if (!(makes.indexOf(car.make) !== -1)) {
  //       makes.push(car.make);
  //     }
  //   });

  //   const ModelsAndMakes = [models, makes];

  res.json(cars);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is now running on PORT ${PORT}`);
});
