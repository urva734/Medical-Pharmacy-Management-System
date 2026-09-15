const fs = require('fs');
let content = fs.readFileSync('src/lib/api.ts', 'utf8');

content = content.replace(
  "getSalesHistory: (startDate?: string, endDate?: string) => {",
  `getFullSalesHistory: (startDate?: string, endDate?: string) => {
    const params = new URLSearchParams();
    if (startDate) params.append('start_date', startDate);
    if (endDate) params.append('end_date', endDate);
    params.append('include_items', 'true');
    return request<SaleHeader[]>(\`/sales/history?\${params.toString()}\`);
  },
  getSalesHistory: (startDate?: string, endDate?: string) => {`
);

fs.writeFileSync('src/lib/api.ts', content);
