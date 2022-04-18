import {Router} from "express";
const router = Router();
import db from "../database/createConnection.js";
import bcrypt from "bcrypt";

router.post("/api/login", async (req, res) => {
    if(req.session.user)
        return res.send({error: "Already logged in as " + req.session.user.username});

    const {username, password} = req.body;
    const mathingUsers = await db.all("SELECT * FROM users WHERE username = ?", [username]);
    if(mathingUsers.length === 0)
        return res.send({error: "Wrong username"});
    
    const user = mathingUsers[0];
    const correctPassword = await bcrypt.compare(password, user.password);
    if(!correctPassword)
        return res.send({error: "Wrong password"});
    
    req.session.user = user;
    return res.send({message: "Logged in as " + user.username});
    
});

router.get("/api/logout", (req, res) => {
    if(!req.session.user)
        return res.send({error: "Not logged in"});
    
    const user = req.session.user;
    req.session.user = undefined;
    res.send({message: "Logged out from " + user.username});
});

export default router;