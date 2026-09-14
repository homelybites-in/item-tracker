import { addItem } from './actions';

export default async function AddItemPage({ searchParams }) {
  const params = await searchParams;
  const hasError = params?.error === '1';

  return (
    <main
      style={{
        maxWidth: 360,
        margin: '60px auto',
        fontFamily: 'sans-serif',
      }}
    >
      <h1>Add Item</h1>
      <form action={addItem}>
        <div style={{ marginBottom: 12 }}>
          <label>
            Item Name (max 30 characters)
            <br />
            <input
              name="itemName"
              maxLength={30}
              required
              style={{ width: '100%', padding: 8 }}
            />
          </label>
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>
            Price
            <br />
            <input
              name="price"
              type="number"
              step="0.01"
              min="0.01"
              required
              style={{ width: '100%', padding: 8 }}
            />
          </label>
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>
            Category
            <br />
            <select name="category" required defaultValue="" style={{ width: '100%', padding: 8 }}>
              <option value="" disabled>
                Select a category
              </option>
              <option value="Brownie">Brownie</option>
              <option value="Cookie">Cookie</option>
              <option value="Cupcake">Cupcake</option>
            </select>
          </label>
        </div>
        {hasError && <p style={{ color: 'red' }}>Please check the values you entered.</p>}
        <button type="submit" style={{ padding: '8px 16px' }}>
          Save
        </button>
      </form>
    </main>
  );
}
