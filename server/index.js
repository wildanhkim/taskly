import express from 'express';
import "dotenv/config";
import { db } from "./config/db.js";
import userRouter from './routes/user.route.js';

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware untuk menangani JSON
app.use(express.json());

// Middleware untuk logging request
app.use((req, res, next) => {
    console.log(`[${req.method}] ${req.url}`);
    next();
});

// Rute utama untuk pengecekan server
app.get("/", (req, res) => {
    res.status(200).json({ message: "hello world" });
});

// Rute untuk User API
app.use('/api/v1/users', userRouter);

// Menangani rute yang tidak ditemukan
app.use("*", (req, res) => {
    res.status(404).json({ message: "not found" });
});

// Memulai server
app.listen(PORT, () => {
    console.log(`Server started, listening on port ${PORT}`);
});
