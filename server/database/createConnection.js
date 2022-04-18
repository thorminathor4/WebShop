import {open} from "sqlite";
import sqlite3 from "sqlite3";

const db = await open({
    filename: 'webshop.db',
    driver: sqlite3.Database
});

export default db;