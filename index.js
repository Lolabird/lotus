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
    const is_public_default = 1;
    const is_open_default = 0;
    const is_archived_default = 0;
    const is_trash_default = 0;

    db.run('INSERT INTO projects (name, is_public, is_open, is_archived, is_trash) VALUES (?, ?, ?, ?, ?)', 
      [name, is_public_default, is_open_default, is_archived_default, is_trash_default], (err) => {
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
  const is_complete_default = 0;
  const is_open_default = 0;
  const is_archived_default = 0;
  const is_trash_default = 0;

  db.run('INSERT INTO tasks (name, is_complete, is_open, is_archived, is_trash, project_id) VALUES (?, ?, ?, ?, ?, ?)', 
    [name, is_complete_default, is_open_default, is_archived_default, is_trash_default, project_id], (err) => {
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
