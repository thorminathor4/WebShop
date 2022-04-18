import { Router } from "express";
const router = Router();
import db from "../database/createConnection.js";

router.get("/api/categories", async (req, res) => {
    console.log("Getting all categories");
    const categories = await db.all("SELECT * FROM categories");
    console.log(categories);
    res.send(categories);
});

router.get("/api/categories/:id", async (req, res) => {
    const id = Number(req.params.id);
    let mapping = await db.all("SELECT * FROM product_categories WHERE category_id = ?", [id]);
    const products = [];
    for(let i in mapping){
        const product = await db.all("SELECT * FROM products WHERE id = ?", [mapping[i].product_id]);
        products.push(product[0]);
    }
    console.log(products);
    res.send(products);
});

router.post("/api/categories", async (req, res) => {
    const {name} = req.body;
    const {changes} = await db.run("INSERT INTO categories (name) VALUES (?)", [name]);
    res.send(changes);
});

router.put("/api/categories/:id", async (req, res) => {
    const id = Number(req.params.id);
    const {products} = req.body;
    const changes = [];
    await products.array.forEach(async product => {
        const {changes:change} = await db.run("INSERT INTO product_categories (product_id, category_id) VALUES (?, ?)", [product.id, id]);
        changes.push(change);
    });
    res.send(changes);
});

router.delete("/api/categories/:id", async (req, res) => {
    const id = Number(req.params.id);
    const {changes:change1} = await db.run("DELETE FROM categories WHERE id = ?", [id]);
    const {changes:change2} = await db.run("DELETE FROM product_categories WHERE id = ?", [id]);
    const changes = [change1, change2];
    res.send(changes);
});

export default router;