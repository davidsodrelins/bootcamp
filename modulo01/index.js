const express = require ('express');


const server = express();
server.use(express.json());

const projects = [];

//lista de projetos
server.get('/projects', (req, res)=>{ //teste?nome=david
  return res.json(projects);
})

server.get('/projects/:id', (req, res)=>{ //teste2/david
  const {id} = req.params;
  return res.json(projects[id]);
})

server.post('/projects', (req, res)=>{
  const {name} = req.body;
  projects.push(name);
  return res.json(projects);
})
server.post('/projects/:id/task', (req, res)=>{
  const {task} = req.body;
  projects[id].task.push(name);
  return res.json(projects[id]);
})
server.put('/projects', (req, res)=>{
  const {name} = req.body;
  projects.push(name);
  return res.json(projects);
})
server.delete('/projects', (req, res)=>{
  const {name} = req.body;
  projects.push(name);
  return res.json(projects);
})



server.listen(3000);