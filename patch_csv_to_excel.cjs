const fs = require('fs');
const files = [
  'src/components/AuditLogScreen.tsx',
  'src/components/InventoryScreen.tsx',
  'src/components/ReportsScreen.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Add import
  if (!content.includes("exportToExcel")) {
    content = content.replace("import React,", "import { exportToExcel } from '../lib/excel';\nimport React,");
  }

  if (file.includes('AuditLogScreen')) {
    content = content.replace(
      /const csvContent = \[headers\.join\(','\), \.\.\.rows\.map\(\(r\) => r\.join\(','\)\)\]\.join\('\\n'\);\n\s*const blob = new Blob\(\[csvContent\], \{ type: 'text\/csv;charset=utf-8;' \}\);\n\s*const url = URL\.createObjectURL\(blob\);\n\s*const link = document\.createElement\('a'\);\n\s*link\.setAttribute\('href', url\);\n\s*link\.setAttribute\('download', `Khushi_Pharmacy_Audit_Logs_\$\{new Date\(\)\.toISOString\(\)\.split\('T'\)\[0\]\}\.csv`\);\n\s*document\.body\.appendChild\(link\);\n\s*link\.click\(\);\n\s*document\.body\.removeChild\(link\);/g,
      "exportToExcel([headers, ...rows], `Khushi_Pharmacy_Audit_Logs_${new Date().toISOString().split('T')[0]}`);"
    );
    content = content.replace(/Export CSV/g, 'Export Excel');
  }

  if (file.includes('InventoryScreen')) {
    content = content.replace(
      /const csvContent = \[headers\.join\(','\), \.\.\.rows\.map\(e => e\.join\(','\)\)\]\.join\('\\n'\);\n\s*const blob = new Blob\(\[csvContent\], \{ type: 'text\/csv;charset=utf-8;' \}\);\n\s*const url = URL\.createObjectURL\(blob\);\n\s*const link = document\.createElement\('a'\);\n\s*link\.setAttribute\('href', url\);\n\s*link\.setAttribute\('download', `Khushi_Pharmacy_Inventory_\$\{new Date\(\)\.toISOString\(\)\.split\('T'\)\[0\]\}\.csv`\);\n\s*document\.body\.appendChild\(link\);\n\s*link\.click\(\);\n\s*document\.body\.removeChild\(link\);/g,
      "exportToExcel([headers, ...rows], `Khushi_Pharmacy_Inventory_${new Date().toISOString().split('T')[0]}`);"
    );
    content = content.replace(/Export CSV/g, 'Export Excel');
  }

  if (file.includes('ReportsScreen')) {
    content = content.replace(
      /const csvContent = \[headers\.join\(','\), \.\.\.rows\.map\(e => e\.join\(','\)\)\]\.join\('\\n'\);\n\s*const blob = new Blob\(\[csvContent\], \{ type: 'text\/csv;charset=utf-8;' \}\);\n\s*const url = URL\.createObjectURL\(blob\);\n\s*const link = document\.createElement\('a'\);\n\s*link\.setAttribute\('href', url\);\n\s*link\.setAttribute\('download', `Khushi_Sales_Report_\$\{startDate\}_to_\$\{endDate\}\.csv`\);\n\s*document\.body\.appendChild\(link\);\n\s*link\.click\(\);\n\s*document\.body\.removeChild\(link\);/g,
      "exportToExcel([headers, ...rows], `Khushi_Sales_Report_${startDate}_to_${endDate}`);"
    );
    content = content.replace(/Export CSV/g, 'Export Excel');
  }

  fs.writeFileSync(file, content);
});
