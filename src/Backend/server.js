import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());

// const names = ["Ahri", "Annie", "Lux"];

/* app.get(
  "https://ddragon.leagueoflegends.com/cdn/14.7.1/data/en_US/champion.json",
  (req, res) => {
    const names = res.json();
    return names;
  }
); */

app.get("/champions", async (req, res) => {
  try {
    // Make a GET request to the external API
    const response = await axios.get(
      "https://ddragon.leagueoflegends.com/cdn/14.7.1/data/en_US/champion.json"
    );
    // Extract the data you need from the response
    const championNames = Object.keys(response.data.data).map(
      (key) => response.data.data[key].name
    );
    // Send the data back to the frontend
    res.json(championNames);
  } catch (error) {
    // Handle errors
    console.error("Error fetching champion names:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
