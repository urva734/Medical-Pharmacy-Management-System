const fs = require('fs');
let content = fs.readFileSync('src/components/UserManagementScreen.tsx', 'utf8');

content = content.replace(
  /<button\n\s*onClick=\{\(\) => \{\n\s*setShowAddModal\(true\);\n\s*setNewUser\(\{\n\s*username: '',\n\s*password: '',\n\s*fullName: '',\n\s*role: 'STAFF',\n\s*email: '',\n\s*phone: '',\n\s*\}\);\n\s*setAddError\(''\);\n\s*\}\}\n\s*className="flex items-center gap-1\.5 px-3 py-1\.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded shadow-sm transition"\n\s*>\n\s*<UserPlus className="w-3\.5 h-3\.5" \/>\n\s*<span>Add New User<\/span>\n\s*<\/button>\n\s*\)\}/g,
  `<button
            onClick={() => {
              setShowAddModal(true);
              setNewUser({
                username: '',
                password: '',
                fullName: '',
                role: 'STAFF',
                email: '',
                phone: '',
              });
              setAddError('');
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded shadow-sm transition"
          >
            <UserPlus className="w-3.5 h-3.5" />
            <span>Add New User</span>
          </button>`
);

content = content.replace(
  /<button\n\s*onClick=\{\(\) => \{\n\s*setShowAddModal\(true\);\n\s*setNewUser\(\{\n\s*username: '',\n\s*password: '',\n\s*fullName: '',\n\s*role: 'STAFF',\n\s*email: '',\n\s*phone: '',\n\s*\}\);\n\s*setAddError\(''\);\n\s*\}\}\n\s*className="flex items-center gap-1\.5 px-3 py-1\.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded shadow-sm transition"\n\s*>\n\s*<UserPlus className="w-3\.5 h-3\.5" \/>\n\s*<span>Add New User<\/span>\n\s*<\/button>/g,
  `{canRegister && (
          <button
            onClick={() => {
              setShowAddModal(true);
              setNewUser({
                username: '',
                password: '',
                fullName: '',
                role: 'STAFF',
                email: '',
                phone: '',
              });
              setAddError('');
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded shadow-sm transition"
          >
            <UserPlus className="w-3.5 h-3.5" />
            <span>Add New User</span>
          </button>
        )}`
);

fs.writeFileSync('src/components/UserManagementScreen.tsx', content);
