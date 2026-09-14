'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function login(formData) {
  const username = formData.get('username');
  const password = formData.get('password');

  const isValid =
    username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD;

  if (!isValid) {
    redirect('/login?error=1');
  }

  const cookieStore = await cookies();
  cookieStore.set('session', process.env.SESSION_SECRET, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
  });

  redirect('/');
}
