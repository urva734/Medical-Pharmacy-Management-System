const fs = require('fs');
let um = fs.readFileSync('src/components/UserManagementScreen.tsx', 'utf8');

um = um.replace(
  `<div className="flex items-center gap-2">\n          <button\n            onClick={() => {\n              setShowAddModal(true);\n              setAddError('');\n            }}\n            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded shadow-sm transition"\n          >\n            <UserPlus className="w-3.5 h-3.5" />\n            <span>Add New User</span>\n          </button>\n        )}`,
  `<div className="flex items-center gap-2">
          {canRegister && (
            <button
              onClick={() => {
                setShowAddModal(true);
                setAddError('');
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded shadow-sm transition"
            >
              <UserPlus className="w-3.5 h-3.5" />
              <span>Add New User</span>
            </button>
          )}`
);
fs.writeFileSync('src/components/UserManagementScreen.tsx', um);
