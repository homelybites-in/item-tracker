import { login } from './actions';

export default async function LoginPage({ searchParams }) {
  const params = await searchParams;
  const hasError = params?.error === '1';

  return (
    <main
      style={{
        maxWidth: 320,
        margin: '80px auto',
        fontFamily: 'sans-serif',
      }}
    >
      <h1>Login</h1>
      <form action={login}>
        <div style={{ marginBottom: 12 }}>
          <label>
            Username
            <br />
            <input name="username" required style={{ width: '100%', padding: 8 }} />
          </label>
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>
            Password
            <br />
            <input
              name="password"
              type="password"
              required
              style={{ width: '100%', padding: 8 }}
            />
          </label>
        </div>
        {hasError && <p style={{ color: 'red' }}>Incorrect username or password.</p>}
        <button type="submit" style={{ padding: '8px 16px' }}>
          Log in
        </button>
      </form>
    </main>
  );
}
