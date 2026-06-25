require('dotenv').config();

const express = require('express');
const app = express();

app.use(express.json());

// Sample tasks
const tasks = [
    { id: 1, title: 'Task One', status: 'pending' },
    { id: 2, title: 'Task Two', status: 'completed' }
];

// GET /tasks/:id
app.get('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const task = tasks.find(task => task.id === id);

    if (!task) {
        return res.status(404).json({
            message: 'Task not found'
        });
    }

    res.json(task);
});

<<<<<<< HEAD
app.listen(5000, () => {
    console.log('Server running on port 5000');
});


//app.js setup - Irene
=======
>>>>>>> 019870786b5d56d46344faa85f9ae3513e5b0af8
module.exports = app;