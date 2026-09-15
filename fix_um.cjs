const fs = require('fs');
let um = fs.readFileSync('src/components/UserManagementScreen.tsx', 'utf8');
um = um.replace(
  `<span>Add New User</span>\n          </button>\n          )}`,
  `<span>Add New User</span>\n          </button>\n        )}`
);
fs.writeFileSync('src/components/UserManagementScreen.tsx', um);
