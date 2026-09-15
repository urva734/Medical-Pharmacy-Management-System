const fs = require('fs');

let sales = fs.readFileSync('src/components/SalesScreen.tsx', 'utf8');
sales = sales.replace(/\\`/g, '`');
fs.writeFileSync('src/components/SalesScreen.tsx', sales);

let um = fs.readFileSync('src/components/UserManagementScreen.tsx', 'utf8');
// Fix unbalanced parenthesis around Add New User button
um = um.replace(
  /<span>Add New User<\/span>\n\s*<\/button>\n\s*\)\}\n\s*<\/button>\n\s*\)\}/g,
  `<span>Add New User</span>\n          </button>\n        )}`
);
fs.writeFileSync('src/components/UserManagementScreen.tsx', um);
