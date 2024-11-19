import express from 'express';
import {
    getUsers,
    getUser,
    updateUser,
    deleteUser,
} from '../controllers/user.controllers.js';

const router = express.Router();

// Route untuk mendapatkan semua pengguna
router.get('/', getUsers);

// Route untuk mendapatkan pengguna berdasarkan ID
router.get('/:id', getUser);

// Route untuk memperbarui pengguna
router.patch('/update/:id', updateUser);

// Route untuk menghapus pengguna
router.delete('/delete/:id', deleteUser);

export default router;
