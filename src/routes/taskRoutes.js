const app = require("../app");
let task = require("../data/task");
const router = require("express").Router();





// Get all tasks: Endpoint done by gomezgani kalua
router.get("/", (req, res) => {
  res.status(200).json(task);
});

//Get tasks by id : Endpoint done by Gomezgani kalua & dorothy
router.get("/:id", (req, res) => {
    const taskFound = task.find(t => t.id == req.params.id);

    if (!taskFound) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    res.status(200).json(taskFound);
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
  const { title, description, status } = req.body

  // Validate required fields
  if (!title)  return res.status(400).json({ message: 'Title is required.' })
  const newTask = {
    id: task.length + 1,
    title,
    description: description || '',
    status: status || 'pending'
  }
  task.push(newTask)
  res.status(201).json(newTask)
});





//PUT  TASK ENDPOINT BY EMMANUEL ABRAHAM
router.put('/:id', (req, res) => {  // Read the request body from the client
  
  const { title, description, status, completed } = req.body

if (
  title === undefined && description === undefined && status === undefined && completed === undefined)
  return res.status(400).json({ message: 'At least one field must be provided.' });
  // Find the task by its numeric id from the route parameter
  let modTask = task.find(t => t.id === parseInt(req.params.id, 10))
  if (!modTask) {
    return res.status(404).json({ message: 'Task not found.' })
  }
  // Apply only the fields that were included in the request
  const fields = ['title', 'description', 'status', 'completed'];

fields.forEach(field => {
  if (req.body[field] !== undefined) {
    modTask[field] = req.body[field];
  }
});
  res.status(200).json(modTask)
})





module.exports = router;
