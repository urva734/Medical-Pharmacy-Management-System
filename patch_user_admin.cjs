const fs = require('fs');
let content = fs.readFileSync('src/components/UserManagementScreen.tsx', 'utf8');

// I already have:
// {u.email === 'umarumair75108db@gmail.com' || u.role === 'SUPER_ADMIN' ? (
//  ... System Protected ...
// ) : ( ... buttons ... )}
// So they wouldn't even see the delete/suspend buttons for the super admin!
