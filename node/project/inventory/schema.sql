DROP TABLE IF EXISTS categories;
CREATE TABLE categories (
		id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
		name VARCHAR (255) NOT NULL
);

DROP TABLE IF EXISTS products;
CREATE TABLE products (
		id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
		name VARCHAR (255) NOT NULL,
		cents INTEGER NOT NULL
);

DROP TABLE IF EXISTS categories_products;
CREATE TABLE categories_products (
		id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
		category_id INTEGER,
		product_id INTEGER,
		FOREIGN KEY(category_id) REFERENCES categories(id),
		FOREIGN KEY(product_id) REFERENCES products(id)
);

INSERT INTO categories (
	name
) VALUES ( 'Food' ), ( 'Bath' );
