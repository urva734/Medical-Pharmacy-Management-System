const fs = require('fs');
let content = fs.readFileSync('src/components/SettingsBackupScreen.tsx', 'utf8');

if (!content.includes('showExportPwd')) {
  content = content.replace(
    "const [showBackupPwd, setShowBackupPwd] = useState<boolean>(false);",
    "const [showBackupPwd, setShowBackupPwd] = useState<boolean>(false);\n  const [showExportPwd, setShowExportPwd] = useState<boolean>(false);"
  );
  
  content = content.replace(
    `                <div>\n                  <label className="block text-slate-300 font-semibold mb-1">Master Encryption Password *</label>\n                  <input\n                    type="password"\n                    value={exportPassword}\n                    onChange={(e) => {\n                      setExportPassword(e.target.value);\n                      setExportError('');\n                    }}\n                    placeholder="Enter strong password (min 8 chars)..."\n                    className="w-full bg-slate-900 text-white p-2.5 rounded-xl border border-slate-700 focus:outline-none focus:border-emerald-500 font-mono text-xs"\n                  />\n                </div>`,
    `                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Master Encryption Password *</label>
                  <div className="relative">
                    <input
                      type={showExportPwd ? "text" : "password"}
                      value={exportPassword}
                      onChange={(e) => {
                        setExportPassword(e.target.value);
                        setExportError('');
                      }}
                      placeholder="Enter strong password (min 8 chars)..."
                      className="w-full bg-slate-900 text-white p-2.5 pr-10 rounded-xl border border-slate-700 focus:outline-none focus:border-emerald-500 font-mono text-xs"
                    />
                    <button
                      type="button"
                      onClick={() => setShowExportPwd(!showExportPwd)}
                      className="absolute right-3 top-2.5 text-slate-400 hover:text-white"
                    >
                      {showExportPwd ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>`
  );
  fs.writeFileSync('src/components/SettingsBackupScreen.tsx', content);
}
