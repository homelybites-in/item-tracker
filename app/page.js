import Link from 'next/link';

export default function HomePage() {
  return (
    <main
      style={{
        maxWidth: 320,
        margin: '80px auto',
        fontFamily: 'sans-serif',
        textAlign: 'center',
      }}
    >
      <div>
        <Link href="/add-item" style={{ fontSize: 20 }}>
          Add Item
        </Link>
      </div>
      <div style={{ marginTop: 16 }}>
        <Link href="/view-items" style={{ fontSize: 20 }}>
          View Items
        </Link>
      </div>
    </main>
  );
}
