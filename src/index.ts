import express from "express";

const port = 4000;
const app = express();

app.listen(port, () => {
  console.log(`Listening on http://localhost port ${port}`);
});
