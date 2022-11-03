import express from "express";
import * as dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT;
const app = express();

app.use(express.json());

const server = app.listen(port, () => {
  console.log(`Listening on http://localhost port ${port}`);
});

server.on("error", Error);
