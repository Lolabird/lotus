const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('lotus.db');

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS projects (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT
    )
  `);
});

module.exports = db;
