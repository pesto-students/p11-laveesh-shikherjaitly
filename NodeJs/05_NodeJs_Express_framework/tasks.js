let tasks = [
    { id: 1, title: 'Task 1', description: 'Description 1', completed: false },
    { id: 2, title: 'Task 2', description: 'Description 2', completed: true },
    // Add more tasks as needed
  ];
  
  exports.getTasks = (req, res) => {
    res.json(tasks);
  };
  
  exports.addTask = (req, res) => {
    const { title, description } = req.body;
    const newTask = { id: tasks.length + 1, title, description, completed: false };
    tasks.push(newTask);
    res.json(newTask);
  };
  
  exports.viewTask = (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find(task => task.id === id);
    if (task) {
      res.json(task);
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  };
  
  exports.updateTask = (req, res) => {
    const id = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(task => task.id === id);
  
    if (taskIndex !== -1) {
      tasks[taskIndex] = { ...tasks[taskIndex], ...req.body };
      res.json(tasks[taskIndex]);
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  };
  
  exports.deleteTask = (req, res) => {
    const id = parseInt(req.params.id);
    tasks = tasks.filter(task => task.id !== id);
    res.json({ message: 'Task deleted successfully' });
  };
  