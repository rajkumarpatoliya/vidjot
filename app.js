/* jshint esversion: 6 */
const express = require("express");
const app = express();
const port = 5000;

// Index Route
app.get("/", (req, res) => {
  res.send("Hello From index page...");
});

// About Route
app.get("/about", (req, res) => {
  console.log("in about");
});

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
