const fs = require('fs');
let content = fs.readFileSync('src/components/SuperAdminScreen.tsx', 'utf8');

content = content.replace(
  `            <button\n              onClick={() => handleUpdateTenantStatus(t.id, t.status)}\n              className={\`px-2.5 py-1.5 rounded-lg text-[11px] font-semibold border \${\n                t.status === 'ACTIVE' \n                  ? 'bg-amber-950/30 text-amber-500 border-amber-900/50 hover:bg-amber-900/50' \n                  : 'bg-emerald-950/30 text-emerald-500 border-emerald-900/50 hover:bg-emerald-900/50'\n              }\`}\n            >`,
  `            <button\n              onClick={() => handleUpdateTenantStatus(t.id, t.status)}\n              disabled={t.id === 1}\n              className={\`px-2.5 py-1.5 rounded-lg text-[11px] font-semibold border \${\n                t.id === 1 ? 'opacity-50 cursor-not-allowed bg-slate-900 text-slate-500 border-slate-700' :\n                t.status === 'ACTIVE' \n                  ? 'bg-amber-950/30 text-amber-500 border-amber-900/50 hover:bg-amber-900/50' \n                  : 'bg-emerald-950/30 text-emerald-500 border-emerald-900/50 hover:bg-emerald-900/50'\n              }\`}\n              title={t.id === 1 ? "Cannot suspend flagship store" : "Toggle status"}\n            >`
);

content = content.replace(
  `            <button\n              onClick={() => handleDeleteTenant(t.id, t.name)}\n              className="px-2.5 py-1.5 rounded-lg text-[11px] font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700"\n            >`,
  `            <button\n              onClick={() => handleDeleteTenant(t.id, t.name)}\n              disabled={t.id === 1}\n              className={\`px-2.5 py-1.5 rounded-lg text-[11px] font-semibold border \${t.id === 1 ? 'opacity-50 cursor-not-allowed bg-slate-900 text-slate-600 border-slate-800' : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'}\`}\n              title={t.id === 1 ? "Cannot delete flagship store" : "Delete store"}\n            >`
);

fs.writeFileSync('src/components/SuperAdminScreen.tsx', content);
