import express from "express";
import connection from "./src/util/connection";
import Sound from "./src/models/Sound";

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

// App
const app = express();

app.get("/", (req, res) => {
  const all = () => connection.get("sounds").value();
  res.status(200).json(all());
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
