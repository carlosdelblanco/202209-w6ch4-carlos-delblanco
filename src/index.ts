import express from "express";
import * as dotenv from "dotenv";
import getThingsAlreadyknow from "./controllers/getThingsAlreadyknow.js";
dotenv.config();

const { log } = console;
const port = process.env.PORT;
const app = express();

const server = app.listen(port, () => {
  log(`Listening on http://localhost port ${port}`);
});

app.get("/things", getThingsAlreadyknow);

app.use((req, res) => {
  res.status(404).json({ message: "Getting info" });
});

server.on("error", Error);
