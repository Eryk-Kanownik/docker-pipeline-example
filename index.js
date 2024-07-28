const express = require("express");
const path = require("path");

const PORT = 5000;
const app = express();

app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
  return res.sendFile("index.html");
});

app.listen(PORT, () => console.log("http://localhost:5000"));
