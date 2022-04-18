import { Router } from "express";
const router = Router();
import db from "../database/createConnection.js";

router.get("/api/products", async (req, res) => {
    res.send(await db.all("SELECT * FROM products"));
});

router.post("/api/products", async (req, res) => {
    const {name, price, info, imagepath} = req.body;
    const {changes} = await db.run("INSERT INTO products (name, price, info, imagepath) VALUES (?, ?, ?, ?)",
    [name, price, info, imagepath]);
    res.send(changes);
});

router.put("/api/products/:id", async (req, res) => {
    const id = Number(req.params.id);
    const {name, price, info, imagepath} = req.body;
    const {changes} = await db.run("UPDATE products SET name = ?, price = ?, description = ? WHERE id = ?",
    [name, price, info, imagepath, id]);
    res.send(changes);
});

router.delete("/api/products/:id", async (req, res) => {
    const id = Number(req.params.id);
    const {changes} = await db.run("DELETE FROM products WHERE id = ?", [id]);
    res.send(changes);
});

export default router;