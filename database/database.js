const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database/lotus.db');

db.serialize(() => {
  db.run(`
    PRAGMA foreign_keys = ON;
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS projects (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL UNIQUE,
      is_public INTEGER CHECK (is_public IN (0, 1)),
      is_open INTEGER CHECK (is_open IN (0, 1)),
      is_archived INTEGER CHECK (is_archived IN (0, 1)),
      is_trash INTEGER CHECK (is_trash IN (0, 1))
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS TASKS (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      project_id INTEGER NOT NULL,
      is_complete INTEGER CHECK (is_complete IN (0, 1)),
      is_open INTEGER CHECK (is_open IN (0, 1)),
      is_archived INTEGER CHECK (is_archived IN (0, 1)),
      is_trash INTEGER CHECK (is_trash IN (0, 1)),
      FOREIGN KEY (project_id) REFERENCES projects (id)
    )
  `);
});

module.exports = db;
