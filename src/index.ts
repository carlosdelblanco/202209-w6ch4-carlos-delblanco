import express from "express";
import * as dotenv from "dotenv";
dotenv.config();

const { log } = console;
const port = process.env.PORT;
const app = express();

const server = app.listen(port, () => {
  log(`Listening on http://localhost port ${port}`);
});

app.use((req, res) => {
  res.status(200).json({ message: "getting info" });
});

server.on("error", Error);
