import express from "express";
import bodyparser from "body-parser";

const app = express();

app.use(bodyparser.json());

app.get("/", (req, res) => {
  return res.status(200).send({ status: 200, message: "Welcome to GMS!" });
});

const PORT = 3000;
app.listen(PORT, () => {
  // app is running on 3000

  console.log("running...");
});

export default app;
