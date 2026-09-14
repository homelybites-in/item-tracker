# Item Tracker

A minimal app: one admin login, "Add Item" and "View Items" links, one form.
Fields: Item ID (auto), Item Name (max 30 chars), Price (positive, 2 decimals), Category (Brownie/Cookie/Cupcake).

See the setup guide provided in chat for how to deploy this for free on Vercel + Neon.

## Environment variables (set these in Vercel, not in this code)

- `ADMIN_USERNAME` — the login username you choose
- `ADMIN_PASSWORD` — the login password you choose
- `SESSION_SECRET` — any long random string (acts as the "stay logged in" token)
- `POSTGRES_URL` and related `POSTGRES_*` vars — added automatically when you connect a Neon database in Vercel's Storage tab

## Database

Run the contents of `schema.sql` once, in Neon's SQL editor, to create the `items` table.
