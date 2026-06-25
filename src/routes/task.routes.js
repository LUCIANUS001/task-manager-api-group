const app = require("../app");
const router = require("express").Router();
let task = require("../data/task");

//Delete a task by ID: Endpoint done by Jason Chukwuebuka
router.delete("/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const deletedTask = task.find((t) => t.id === taskId);
  if (!deletedTask) {
    return res.status(404).json({ error: "Task not found" });
  }
  task = task.filter((t) => t.id !== taskId);
  res.status(200).json({ message: "Task deleted successfully" });
});

module.exports = router;
