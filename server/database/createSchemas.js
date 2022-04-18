import db from "./createConnection.js";
import bcrypt from "bcrypt";
const saltRounds = 12;

const isInDeleteMode = true;

if (isInDeleteMode) {
    await db.exec("DROP TABLE IF EXISTS users;");
    await db.exec("DROP TABLE IF EXISTS products;");
    await db.exec("DROP TABLE IF EXISTS categories;");
    await db.exec("DROP TABLE IF EXISTS product_categories;");
}

await db.exec(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(70),
    email VARCHAR(70),
    password VARCHAR(70)
);`);

await db.exec(`CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(70),
    price DOUBLE,
    info VARCHAR(200),
    image VARCHAR(70)
);`);

await db.exec(`CREATE TABLE IF NOT EXISTS categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(70)
);`);

await db.exec(`CREATE TABLE IF NOT EXISTS product_categories (
    product_id INTEGER,
    category_id INTEGER,
    FOREIGN KEY (product_id) REFERENCES products(id),
    FOREIGN KEY (category_id) REFERENCES categories(id)
);`);

// Seed
if (isInDeleteMode) {
    //await db.run("INSERT INTO users (username, email, password) VALUES ('thor', 'thorfa4444@gmail.com', '1234')");
    const alexHash = await bcrypt.hash("0000", saltRounds);
    await db.run(`INSERT INTO users (username, email, password) VALUES ('alex', 'alex_haubro@hotmail.com', '${alexHash}')`);
    await db.run("INSERT INTO products (name, price, info, image) VALUES ('Special Burger', 50, 'Beef, Cheese, Lettuce, Tomato, Ketchup, Mayo', 'SpecialBurger.png')");
    await db.run("INSERT INTO products (name, price, info, image) VALUES ('Special Pizza', 65, 'Tomato, Cheese, Pepperoni, Tomato Slices, Basil', 'SpecialPizza.png')");
    await db.run("INSERT INTO categories (name) VALUES ('Customer Favorites'), ('Special Offers'), ('News')");
    await db.run("INSERT INTO product_categories (product_id, category_id) VALUES (1, 1), (1, 2), (1, 3), (2, 1), (2, 2), (2, 3)");
}

db.close();