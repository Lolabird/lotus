const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database/lotus.db');

db.serialize(() => {
  db.run(`
    PRAGMA foreign_keys = ON;
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS projects (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS TASKS (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      project_id INTEGER NOT NULL,
      FOREIGN KEY (project_id)
        REFERENCES projects (id)
    )
  `);
});

module.exports = db;
