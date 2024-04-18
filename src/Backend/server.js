import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());

app.get("/champions", async (req, res) => {
  try {
    const response = await axios.get(
      "https://ddragon.leagueoflegends.com/cdn/14.7.1/data/en_US/champion.json"
    );
    const championNames = Object.keys(response.data.data).map(
      (key) => response.data.data[key].name
    );
    res.json(championNames);
  } catch (error) {
    console.error("Error fetching champion names:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
