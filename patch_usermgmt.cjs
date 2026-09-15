const fs = require('fs');
let content = fs.readFileSync('src/components/UserManagementScreen.tsx', 'utf8');

content = content.replace(
  /\{u\.status !== 'PENDING' && \(\n\s*<button\n\s*onClick=\{\(\) => handleUpdateStatus\(u\.id, u\.status === 'APPROVED' \? 'REJECTED' : 'APPROVED'\)\}\n\s*disabled=\{actionLoading\}\n\s*className="p-1 text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded"\n\s*title=\{u\.status === 'APPROVED' \? 'Revoke Access \(Set Rejected\)' : 'Grant Access \(Approve\)'\}\n\s*>\n\s*\{u\.status === 'APPROVED' \? <UserX className="w-3\.5 h-3\.5 text-rose-600" \/> : <UserCheck className="w-3\.5 h-3\.5 text-emerald-600" \/>\}\n\s*<\/button>\n\s*\)\}/g,
  `{u.status !== 'PENDING' && (
                            <button
                              onClick={() => handleUpdateStatus(u.id, u.status === 'APPROVED' ? 'SUSPENDED' : 'APPROVED')}
                              disabled={actionLoading}
                              className="p-1 text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded"
                              title={u.status === 'APPROVED' ? 'Suspend Access' : 'Grant Access (Approve)'}
                            >
                              {u.status === 'APPROVED' ? <UserX className="w-3.5 h-3.5 text-amber-600" /> : <UserCheck className="w-3.5 h-3.5 text-emerald-600" />}
                            </button>
                          )}`
);

fs.writeFileSync('src/components/UserManagementScreen.tsx', content);
