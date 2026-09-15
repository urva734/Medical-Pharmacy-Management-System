const fs = require('fs');
let content = fs.readFileSync('src/components/UserManagementScreen.tsx', 'utf8');

content = content.replace(
  "import { \nimport { Eye, EyeOff } from \"lucide-react\";\n  Users, UserCheck, UserX, Shield, Key, Search, RefreshCw, \n  CheckCircle, AlertTriangle, Trash2, Edit3, UserPlus, Info, Check, X, ShieldAlert \n} from 'lucide-react';",
  "import { Users, UserCheck, UserX, Shield, Key, Search, RefreshCw, CheckCircle, AlertTriangle, Trash2, Edit3, UserPlus, Info, Check, X, ShieldAlert, Eye, EyeOff } from 'lucide-react';"
);

fs.writeFileSync('src/components/UserManagementScreen.tsx', content);
