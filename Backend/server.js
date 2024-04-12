import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const names = ["Ahri", "Annie", "Lux"];

app.get("/users", (req, res) => {
  res.json(names);
});

app.listen(5000);
