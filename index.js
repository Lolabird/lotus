const express = require('express');
const path = require('path');
const db = require('./database/database');

const app = express();
const port = 3000;

// Serve static files (HTML, JS, CSS)
app.use(express.static(path.join(__dirname)));

// Handle requests to the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


// API endpoint to create a new project
app.post('/projects', express.json(), (req, res) => {
    const { name } = req.body;
    db.run('INSERT INTO projects (name) VALUES (?)', [name], (err) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error creating project');
      } else {
        res.status(201).send('Project created');
      }
    });
  });
  
  // API endpoint to fetch all projects
  app.get('/projects', (req, res) => {
    db.all('SELECT * FROM projects', (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error fetching projects');
      } else {
        res.json(rows);
      }
    });
  });

  // API endpoint to create a new task
app.post('/tasks', express.json(), (req, res) => {
  const { name, project_id } = req.body;
  db.run('INSERT INTO tasks (name, project_id) VALUES (?, ?)', [name, project_id], (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error creating task');
    } else {
      res.status(201).send('Task created');
    }
  });
});

// API endpoint to fetch all tasks
app.get('/tasks', (req, res) => {
  db.all('SELECT * FROM tasks', (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error fetching tasks');
    } else {
      res.json(rows);
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
