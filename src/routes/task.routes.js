const app = require("../app");
const router = require("express").Router();
let task = require("../data/task");




// Get all tasks: Endpoint done by gomezgani kalua
router.get("/", (req, res) => {
  res.status(200).json(task);
});

//Get tasks by id : Endpoint done by Gomezgani kalua
router.get("/:id", (req,res) =>{
  const id=parseInt(req.params.id);
  const taskFound=task.find((t) => t.id === id);
  if(!taskFound){
    return res.status(404).json({error: "task not found"})
  }
  else{
    res.status(200).json(taskFound)
  }
})



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
router.put('/:id', (req, res) => {
  const { title, completed } = req.body
   // Find the task by id from the route parameter
  const task = tasks.find(t => t.id === parseInt(req.params.id, 10))
  if (!task) {return res.status(404).json({ message: 'Task not found.' })}
   // Ensure at least one updatable field is provided
  if (title === undefined && completed === undefined) return res.status(400).json({ message: 'At least one field must be provided.' })
  // Apply only the fields that were included in the request  
  if (title !== undefined) return task.title = title 
  if (completed !== undefined) return task.completed = completed 
  // Return the updated task to the client
  res.status(200).json(task)
})




module.exports = router;
