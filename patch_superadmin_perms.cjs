const fs = require('fs');
let content = fs.readFileSync('src/components/SuperAdminScreen.tsx', 'utf8');

content = content.replace(
  "{ id: 'USER_REGISTER', name: 'Allow Registering New Users', desc: 'Allow shopkeeper to register new staff or customers' },",
  "{ id: 'USER_REGISTER', name: 'Allow Registering New Users', desc: 'Allow shopkeeper to register new staff or customers' },\n  { id: 'USER_RESET_PASSWORD', name: 'Allow Password Resets', desc: 'Allow shopkeeper to reset user passwords' },"
);

content = content.replace(
  "USER_VERIFY,USER_REGISTER,AUDIT_LOGS,SETTINGS,CUSTOMER_PORTAL",
  "USER_VERIFY,USER_REGISTER,USER_RESET_PASSWORD,AUDIT_LOGS,SETTINGS,CUSTOMER_PORTAL"
);

fs.writeFileSync('src/components/SuperAdminScreen.tsx', content);

let server = fs.readFileSync('server.ts', 'utf8');
server = server.replace(
  /USER_VERIFY,USER_REGISTER,AUDIT_LOGS,SETTINGS,CUSTOMER_PORTAL/g,
  "USER_VERIFY,USER_REGISTER,USER_RESET_PASSWORD,AUDIT_LOGS,SETTINGS,CUSTOMER_PORTAL"
);
fs.writeFileSync('server.ts', server);
