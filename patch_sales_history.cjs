const fs = require('fs');
let content = fs.readFileSync('server.ts', 'utf8');

content = content.replace(
  "const sales = queryAll(sql, params);\n    res.json(sales);",
  `const sales = queryAll<any>(sql, params);
    if (req.query.include_items === 'true') {
      for (const sale of sales) {
        sale.items = queryAll("SELECT * FROM sales_items WHERE sale_id = ?", [sale.id]);
      }
    }
    res.json(sales);`
);

fs.writeFileSync('server.ts', content);
