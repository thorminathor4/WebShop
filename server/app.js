import express from "express";
const app = express();
app.use(express.json());

import path from "path";
app.use(express.static(path.resolve("../client/public")));

import session from "express-session";
app.use(session({
    secret: "It's a secret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

// import helmet from "helmet";
// app.use('/api', helmet());

// app.use("*", ipLogger);

// function ipLogger(req, res, next) {
//     console.log(req.ip);
//     next();
// }

import productRouter from "./routers/productRouter.js";
app.use(productRouter);

import categoryRouter from "./routers/categoryRouter.js";
app.use(categoryRouter);

import userRouter from "./routers/userRouter.js";
app.use(userRouter);

import authRouter from "./routers/authRouter.js";
app.use(authRouter);

app.get("/", (req, res) => res.sendFile(path.resolve("../client/public/index.html")));
app.get("*", (req, res) => res.sendFile(path.resolve("../client/public/index.html")));

app.listen(5678 || process.env.PORT);