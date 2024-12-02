import express from 'express';
import "dotenv/config";
import { db } from "./config/db.js";
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 8000;

// Konfigurasi middleware CORS
app.use(
    cors({
        origin: process.env.CLIENT_URL, // URL klien yang diperbolehkan
        credentials: true,             // Izinkan pengiriman cookie lintas domain
    })
);

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

// rute untuk auth
app.use('./api/v1/auth', authRouter)

// Menangani rute yang tidak ditemukan
app.use("*", (req, res) => {
    res.status(404).json({ message: "not found" });
});

// Memulai server
app.listen(PORT, () => {
    console.log(`Server started, listening on port ${PORT}`);
});
