const fs = require('fs');
let content = fs.readFileSync('src/components/UserManagementScreen.tsx', 'utf8');

// The issue is an extra `</div>` after `</button>`
content = content.replace(
  /<button type="button" onClick=\{\(\) => setShowPwd\(!showPwd\)\} className="absolute right-2 top-8 text-slate-500"><Eye className="w-4 h-4" \/><\/button>\n                <\/div>\n                <p className="text-\[10px\]/g,
  '<button type="button" onClick={() => setShowPwd(!showPwd)} className="absolute right-2 top-8 text-slate-500"><Eye className="w-4 h-4" /></button>\n                <p className="text-[10px]'
);

content = content.replace(
  /<button type="button" onClick=\{\(\) => setShowAddPwd\(!showAddPwd\)\} className="absolute right-2 top-8 text-slate-500"><Eye className="w-4 h-4" \/><\/button>\n                <\/div>\n                <p className="text-\[10px\]/g,
  '<button type="button" onClick={() => setShowAddPwd(!showAddPwd)} className="absolute right-2 top-8 text-slate-500"><Eye className="w-4 h-4" /></button>\n                <p className="text-[10px]'
);

fs.writeFileSync('src/components/UserManagementScreen.tsx', content);
