const fs = require('fs');
let s = fs.readFileSync('server.ts', 'utf8');

s = s.replace(
  `  // Rebuild users table if old constraint exists`,
  `  try {
    db.run("ALTER TABLE users ADD COLUMN email TEXT");
  } catch (e) {}
  try {
    db.run("ALTER TABLE users ADD COLUMN status TEXT DEFAULT 'APPROVED'");
  } catch (e) {}
  
  // Rebuild users table if old constraint exists`
);

fs.writeFileSync('server.ts', s);
