const fs = require('fs');
let content = fs.readFileSync('src/components/CustomerManagementScreen.tsx', 'utf8');

content = content.replace(
  "const [customers, setCustomers] = useState<Customer[]>([]);",
  `const canRegister = currentUser?.role === 'SUPER_ADMIN' || currentUser?.allowed_services?.includes('USER_REGISTER');
  const [customers, setCustomers] = useState<Customer[]>([]);`
);

content = content.replace(
  /<button\n\s*onClick=\{\(\) => setShowAddModal\(true\)\}\n\s*className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-3 sm:px-4 py-2 rounded-xl flex items-center space-x-1\.5 shadow-lg shadow-emerald-950\/50"\n\s*>\n\s*<UserPlus className="w-4 h-4" \/>\n\s*<span>Add Customer<\/span>\n\s*<\/button>/g,
  `{canRegister && (
            <button
            onClick={() => setShowAddModal(true)}
            className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-3 sm:px-4 py-2 rounded-xl flex items-center space-x-1.5 shadow-lg shadow-emerald-950/50"
          >
            <UserPlus className="w-4 h-4" />
            <span>Add Customer</span>
          </button>
          )}`
);

fs.writeFileSync('src/components/CustomerManagementScreen.tsx', content);
