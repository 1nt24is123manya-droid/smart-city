const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/traffic", (req, res) => {
  res.json({ area: "Zone A", traffic: 75 });
});

app.get("/energy", (req, res) => {
  res.json({ zone: "Zone B", usage: 420 });
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});