require("dotenv").config();
const taskRoutes = require("./routes/task.routes");

const express = require("express");
const app = express();

app.use(express.json());

app.use("/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.send("Task Manager API is running!");
});




//app.js setup - Irene
module.exports = app;

