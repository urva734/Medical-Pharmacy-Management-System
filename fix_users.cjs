const fs = require('fs');
let s = fs.readFileSync('server.ts', 'utf8');

s = s.replace(
  `    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      role TEXT NOT NULL,
      full_name TEXT NOT NULL,
      phone TEXT,
      customer_id INTEGER,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );`,
  `    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      role TEXT NOT NULL,
      full_name TEXT NOT NULL,
      email TEXT,
      phone TEXT,
      status TEXT DEFAULT 'APPROVED',
      customer_id INTEGER,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );`
);

fs.writeFileSync('server.ts', s);
