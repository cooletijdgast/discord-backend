import express, { Application, Request, Response } from "express";
import connection from "./util/connection";
import { watch } from 'node:fs';

// Constants
const PORT = 4000;
const HOST = "0.0.0.0";

// App
const app = express();
app.use(function (request: Request, response: Response, next) {
  const allowedOrigins = [
    "http://86.89.142.164:4200",
    "http://localhost:4200",
  ];
  const origin = request.headers.origin;
  if (allowedOrigins.includes(origin!)) {
    response.setHeader("Access-Control-Allow-Origin", origin!);
  }
  // response.setHeader(
  //   "Access-Control-Allow-Origin",
  //   "http://86.89.142.164:4200"
  // );
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

watch('db.json', (eventType, filename) => {
  console.log(`event type is: ${eventType}`);
  if (filename) {
    console.log(`filename provided: ${filename}`);
  } else {
    console.log('filename not provided');
  }
}); 

app.get("/", (req, res) => {
  const all = () => connection.get("sounds").values();
  res.status(200).json(all());
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
