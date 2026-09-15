const fs = require('fs');
let s = fs.readFileSync('server.ts', 'utf8');

s = s.replace(
  /umarumair75108@gmail\.com/g,
  'umarumair75108db@gmail.com'
);

// I should also ensure that the password is correct!
// Currently the password is `superAdminPassHash` which was `admin123`.
// Let's modify the init code for Umar's user.
s = s.replace(
  /const superAdminPassHash = bcrypt\.hashSync\('admin123', 10\);/g,
  `const superAdminPassHash = bcrypt.hashSync('admin123', 10);\n  const umarPassHash = bcrypt.hashSync('Um@r.1080db', 10);`
);

s = s.replace(
  /\['umarumair75108db@gmail\.com', superAdminPassHash, 'Umar Umair \(Platform Director\)', 'umarumair75108db@gmail\.com', '03001234567'\]/g,
  `['umarumair75108db@gmail.com', umarPassHash, 'Umar Umair (Platform Director)', 'umarumair75108db@gmail.com', '03001234567']`
);
s = s.replace(
  /db\.run\("UPDATE users SET role = 'SUPER_ADMIN', status = 'APPROVED' WHERE email = \? OR username = \?", \['umarumair75108db@gmail\.com', 'umarumair75108db@gmail\.com'\]\);/g,
  `db.run("UPDATE users SET password_hash = ?, role = 'SUPER_ADMIN', status = 'APPROVED' WHERE email = ? OR username = ?", [umarPassHash, 'umarumair75108db@gmail.com', 'umarumair75108db@gmail.com']);`
);

// Demote other super admins if any, keeping only umar
s = s.replace(
  /saveDatabase\(\);\n  console.log\("SQLite Database initialized successfully."\);/g,
  `db.run("UPDATE users SET role = 'ADMIN' WHERE role = 'SUPER_ADMIN' AND email != 'umarumair75108db@gmail.com'");
  
  saveDatabase();
  console.log("SQLite Database initialized successfully.");`
);

fs.writeFileSync('server.ts', s);

let u = fs.readFileSync('src/components/UserManagementScreen.tsx', 'utf8');
u = u.replace(/umarumair75108@gmail\.com/g, 'umarumair75108db@gmail.com');
fs.writeFileSync('src/components/UserManagementScreen.tsx', u);
