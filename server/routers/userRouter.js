import {Router} from "express";
const router = Router();
import db from "../database/createConnection.js";
import {verifyMail, sendMail} from "../scripts/mailService.js";
import bcrypt from "bcrypt";
const saltRounds = 12;

router.get("/api/users", async (req, res) => {
    res.send(await db.all("SELECT * FROM users"));
});

router.get("/api/users/:id", async (req, res) => {
    const id = Number(req.params.id);
    res.send(await db.all("SELECT * FROM users WHERE id = ?", [id]));
});

router.post("/api/users", async (req, res) => {
    const {username, email, password} = req.body;
    console.log(req.body);
    const sameUsername = await db.all("SELECT * FROM users WHERE username = ?", [username]);
    const sameEmail = await db.all("SELECT * FROM users WHERE email = ?", [email]);
    let collisions = [];
    if(sameUsername.length > 0)
        collisions.push("username")
    
    if(sameEmail.length > 0)
        collisions.push("email")

    if(collisions.length > 0)
        return res.send({error: collisions.join(' and ') + " already in use"});
    
    //const mailResult = await verifyMail(email);
    //console.log(mailResult);
    // if(mailResult.error)
    //     return res.send({error: "Could not send mail to email address: " + email});
    const passwordHash = await bcrypt.hash(password, saltRounds);
    const resultset = await db.run("INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
    [username, email, passwordHash]);
    //console.log(email);
    sendMail(email);
    
    res.send(resultset);
});

router.put("/api/users/:id", async (req, res) => {
    const id = Number(req.params.id);
    const {username, email, password} = req.body;
    const {changes} = await db.run("UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?",
    [username, email, password, id]);
    res.send(changes);
});

router.delete("/api/users/:id", async (req, res) => {
    const id = Number(req.params.id);
    const {changes} = await db.run("DELETE FROM users WHERE id = ?", [id]);
    res.send(changes);
});

export default router;