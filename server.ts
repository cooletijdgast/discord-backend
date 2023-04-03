import express, { Application, Request, Response } from 'express';
import connection from "./src/util/connection";

// Constants
const PORT = 4000;
const HOST = "0.0.0.0";

// App
const app = express();

app.use(function (_request: Request, response: Response, next) {
  response.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
  response.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  response.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  response.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const all = () => connection.get("sounds").value();
  res.status(200).json(all());
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
