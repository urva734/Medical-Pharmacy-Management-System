const fs = require('fs');
let content = fs.readFileSync('server.ts', 'utf8');

content = content.replace(
  /if \(user\.status === 'REJECTED'\) \{\n      logAudit\(user\.id, user\.full_name, 'LOGIN_BLOCKED', `Login blocked: Account registration REJECTED by Admin \(\$\{user\.username\}\)`, 'AUTH', user\.id, req\);\n      return res\.status\(403\)\.json\(\{ error: 'Your account registration was rejected by the Admin\.' \}\);\n    \}/g,
  `if (user.status === 'REJECTED') {
      logAudit(user.id, user.full_name, 'LOGIN_BLOCKED', \`Login blocked: Account registration REJECTED by Admin (\${user.username})\`, 'AUTH', user.id, req);
      return res.status(403).json({ error: 'Your account registration was rejected by the Admin.' });
    }

    if (user.status === 'SUSPENDED') {
      logAudit(user.id, user.full_name, 'LOGIN_BLOCKED', \`Login blocked: Account SUSPENDED by Admin (\${user.username})\`, 'AUTH', user.id, req);
      return res.status(403).json({ error: 'Your account is currently suspended. Please contact Admin.' });
    }`
);

fs.writeFileSync('server.ts', content);
