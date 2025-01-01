import express from "express";
import cors from "cors";
import pool from "./db.js";
import { profileImageSources } from "./db.js";
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/projects", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM web_dev_projects_info");
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

app.get("/profile_image", (req, res) => {
  try {
    const result = profileImageSources;
    console.log(result);

    res.json(result);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
