'use server';

import { sql } from '@vercel/postgres';
import { redirect } from 'next/navigation';

const VALID_CATEGORIES = ['Brownie', 'Cookie', 'Cupcake'];

export async function addItem(formData) {
  const itemName = (formData.get('itemName') || '').toString().trim().slice(0, 30);
  const price = Number(formData.get('price'));
  const category = formData.get('category');

  const isValid =
    itemName.length > 0 &&
    Number.isFinite(price) &&
    price > 0 &&
    VALID_CATEGORIES.includes(category);

  if (!isValid) {
    redirect('/add-item?error=1');
  }

  const roundedPrice = Math.round(price * 100) / 100;

  await sql`
    INSERT INTO items (item_name, price, category)
    VALUES (${itemName}, ${roundedPrice}, ${category})
  `;

  redirect('/');
}
