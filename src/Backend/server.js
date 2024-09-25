import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());

app.get("/champions", async (req, res) => {
  try {
    const response = await axios.get(
      "https://ddragon.leagueoflegends.com/cdn/14.19.1/data/en_US/champion.json"
    );
    const championInfo = response.data.data;
    res.json(championInfo);
  } catch (error) {
    console.error("Error fetching champion names:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/champion/:name", async (req, res) => {
  const { name } = req.params;
  try {
    const response = await axios.get(
      `https://ddragon.leagueoflegends.com/cdn/14.12.1/data/en_US/champion/${name}.json`
    );

    const championInfo = response.data.data[name];
    res.json(championInfo);
  } catch (error) {
    console.error(`Error fetching data for champion ${name}`, error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
