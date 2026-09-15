const fs = require('fs');
let content = fs.readFileSync('src/components/UserManagementScreen.tsx', 'utf8');

content = content.replace(
  "Check, X, ShieldAlert } from 'lucide-react';",
  "Check, X, ShieldAlert, Eye, EyeOff } from 'lucide-react';"
);

content = content.replace(
  "const [newPassword, setNewPassword] = useState('');",
  "const [newPassword, setNewPassword] = useState('');\n  const [showPwd, setShowPwd] = useState(false);\n  const [showAddPwd, setShowAddPwd] = useState(false);"
);

content = content.replace(
  /type="password"\n\s+value=\{newPassword\}/g,
  `type={showPwd ? "text" : "password"}
                  value={newPassword}`
);

content = content.replace(
  /className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-indigo-500 font-mono"\n\s*\/>\n\s*<p className="text-\[10px\] text-slate-500 mt-1">/g,
  `className="w-full px-3 py-2 pr-10 border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-indigo-500 font-mono"
                />
                <button type="button" onClick={() => setShowPwd(!showPwd)} className="absolute right-2 top-8 text-slate-500"><Eye className="w-4 h-4" /></button>
                </div>
                <p className="text-[10px] text-slate-500 mt-1">`
);

content = content.replace(
  /<div>\n\s*<label className="block text-slate-700 font-bold mb-1">Set New Strong Password \*/g,
  `<div className="relative">\n                <label className="block text-slate-700 font-bold mb-1">Set New Strong Password *`
);

content = content.replace(
  /<div>\n\s*<label className="block text-slate-700 font-bold mb-1">Password \*/g,
  `<div className="relative">\n                <label className="block text-slate-700 font-bold mb-1">Password *`
);

content = content.replace(
  /type="password"\n\s+placeholder="Min 8 characters \(letters \+ numbers\)"\n\s+value=\{addPassword\}/g,
  `type={showAddPwd ? "text" : "password"}
                  placeholder="Min 8 characters (letters + numbers)"
                  value={addPassword}`
);

content = content.replace(
  /className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-500 font-mono"\n\s*required\n\s*\/>\n\s*<p className="text-\[10px\]/g,
  `className="w-full px-3 py-2 pr-10 border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-500 font-mono"
                  required
                />
                <button type="button" onClick={() => setShowAddPwd(!showAddPwd)} className="absolute right-2 top-8 text-slate-500"><Eye className="w-4 h-4" /></button>
                </div>
                <p className="text-[10px]`
);

fs.writeFileSync('src/components/UserManagementScreen.tsx', content);
