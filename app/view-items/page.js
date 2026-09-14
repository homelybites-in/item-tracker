import { sql } from '@vercel/postgres';

const thStyle = { textAlign: 'left', borderBottom: '2px solid #333', padding: 8 };
const tdStyle = { borderBottom: '1px solid #ddd', padding: 8 };

export default async function ViewItemsPage() {
  const { rows } = await sql`
    SELECT item_id, item_name, price, category
    FROM items
    ORDER BY id DESC
  `;

  return (
    <main style={{ maxWidth: 600, margin: '60px auto', fontFamily: 'sans-serif' }}>
      <h1>Items</h1>
      {rows.length === 0 ? (
        <p>No items yet.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={thStyle}>Item ID</th>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Price</th>
              <th style={thStyle}>Category</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((item) => (
              <tr key={item.item_id}>
                <td style={tdStyle}>{item.item_id}</td>
                <td style={tdStyle}>{item.item_name}</td>
                <td style={tdStyle}>{Number(item.price).toFixed(2)}</td>
                <td style={tdStyle}>{item.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
