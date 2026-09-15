const fs = require('fs');
let app = fs.readFileSync('src/App.tsx', 'utf8');
app = app.replace(
  "<UserManagementScreen />",
  "<UserManagementScreen currentUser={currentUser} />"
);
app = app.replace(
  "<CustomerManagementScreen />",
  "<CustomerManagementScreen currentUser={currentUser} />"
);
fs.writeFileSync('src/App.tsx', app);

let usermgmt = fs.readFileSync('src/components/UserManagementScreen.tsx', 'utf8');
usermgmt = usermgmt.replace(
  "export const UserManagementScreen: React.FC = () => {",
  "export const UserManagementScreen: React.FC<{ currentUser?: User }> = ({ currentUser }) => {"
);
fs.writeFileSync('src/components/UserManagementScreen.tsx', usermgmt);

let custmgmt = fs.readFileSync('src/components/CustomerManagementScreen.tsx', 'utf8');
custmgmt = custmgmt.replace(
  "export const CustomerManagementScreen: React.FC = () => {",
  "export const CustomerManagementScreen: React.FC<{ currentUser?: User }> = ({ currentUser }) => {"
);
fs.writeFileSync('src/components/CustomerManagementScreen.tsx', custmgmt);
