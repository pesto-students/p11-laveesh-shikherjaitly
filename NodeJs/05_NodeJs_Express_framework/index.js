const express = require('express');
const PORT = 3000;

const app =  express();

app.use(express.json());
const tasks = [{
    id:1,
    title:"random",
    description: "This is a random task",
    completed: "Yes"
},
{   
    id:2,
    title:"random2",
    description: "This is a random2 task",
    completed: "No"
}
]

app.get("/tasks" ,(req, res)=> {
    res.send(tasks);
});

app.post("/tasks", (req,res)=>{
    //Create new tasks
    let newTask= req.body;
    tasks.push(newTask);

    res.status(201).json(newTask);
});

app.get("/tasks/:id",(req,res)=>{
    const id = parseInt(req.params.id);
  const task = tasks.find(tasks => tasks.id === id);
  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ error: 'task not found' });
  }
});


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
