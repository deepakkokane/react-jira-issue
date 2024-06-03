import "dotenv/config";
import express from "express";
import axios from "axios";
import path from "path";

import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 4000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/jira", async (req, res) => {
  try {
    const response = await axios.get(
      `${process.env.JIRA_BASE_URL}/rest/api/3/search`,
      {
        headers: {
          Authorization: `Basic ${process.env.JIRA_API_TOKEN}`,
          Accept: "application/json",
        },
        params: {
          ...req.query,
        },
      }
    );

    res.send(response.data);
  } catch (error) {
    res.status(error.response.status).send(error.response.data);
  }
});

app.use(express.static(path.join(__dirname, "..", "build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`);
});
