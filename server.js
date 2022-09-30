const express = require("express");

const app = express();

const PORT = 5001;

app.use(express.json());

let exchangeRoutes = require("./app/routes");
app.use("/forex", exchangeRoutes);

app.listen(PORT, () => {
  console.log("Running on port " + PORT);

  //npm run dev
  //npm test
});
