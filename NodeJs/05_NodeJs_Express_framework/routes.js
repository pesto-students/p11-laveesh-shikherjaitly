const express = require('express');
const taskController = require('./tasks');

const router = express.Router();

router.get('/tasks', taskController.getTasks);
router.post('/tasks', taskController.addTask);
router.get('/tasks/:id', taskController.viewTask);
router.put('/tasks/:id', taskController.updateTask);
router.delete('/tasks/:id', taskController.deleteTask);

module.exports = router;
