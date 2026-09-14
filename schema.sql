CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  item_id TEXT GENERATED ALWAYS AS ('ITEM' || LPAD(id::text, 4, '0')) STORED,
  item_name VARCHAR(30) NOT NULL,
  price NUMERIC(10, 2) NOT NULL CHECK (price > 0),
  category TEXT NOT NULL CHECK (category IN ('Brownie', 'Cookie', 'Cupcake')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
