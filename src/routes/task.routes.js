const app = require("../app");
const router = require("express").Router();
let task = require("../data/task");




// Get all tasks: Endpoint done by gomezgani kalua
router.get("/", (req, res) => {
  res.status(200).json(task);
});





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





//POST  TASK ENDPOINT BY EMMANUEL ABRAHAM
router.post('/', (req, res) => {
  const { title, status } = req.body;
  // Validate required fields
  if (!title )  return res.status(400).json({ message: 'Title is required.'});
  const newTask = {
    id: tasks.length + 1,
    title,
    description
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});




module.exports = router;
