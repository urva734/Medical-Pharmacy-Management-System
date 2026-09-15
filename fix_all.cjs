const fs = require('fs');

// 1. CustomerManagementScreen
let cust = fs.readFileSync('src/components/CustomerManagementScreen.tsx', 'utf8');
if (!cust.includes("import { User } from '../types';")) {
  cust = cust.replace(
    "import { api } from '../lib/api';",
    "import { api } from '../lib/api';\nimport { User } from '../types';"
  );
}
fs.writeFileSync('src/components/CustomerManagementScreen.tsx', cust);

// 2. api.ts updateUserStatus
let apiTs = fs.readFileSync('src/lib/api.ts', 'utf8');
apiTs = apiTs.replace(
  "updateUserStatus: (id: number, status: 'APPROVED' | 'REJECTED' | 'PENDING') =>",
  "updateUserStatus: (id: number, status: 'APPROVED' | 'REJECTED' | 'PENDING' | 'SUSPENDED') =>"
);
fs.writeFileSync('src/lib/api.ts', apiTs);

// 3. SettingsBackupScreen setSuccessMsg
let settings = fs.readFileSync('src/components/SettingsBackupScreen.tsx', 'utf8');
if (!settings.includes("const [successMsg, setSuccessMsg] = useState('');")) {
  settings = settings.replace(
    "const [importFileName, setImportFileName] = useState('');",
    "const [importFileName, setImportFileName] = useState('');\n  const [successMsg, setSuccessMsg] = useState('');"
  );
}
fs.writeFileSync('src/components/SettingsBackupScreen.tsx', settings);

