import { db } from '../config/db.js';
import { ObjectId } from 'mongodb';

// Mendapatkan semua pengguna
export const getUsers = async (req, res, next) => {
    try {
        const users = await db.collection('users').find().toArray();
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};

// Mendapatkan pengguna berdasarkan ID
export const getUser = async (req, res, next) => {
    try {
        const user = await db.collection('users').findOne({ _id: new ObjectId(req.params.id) });
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
};

// Memperbarui pengguna
export const updateUser = async (req, res, next) => {
    try {
        const updatedUser = await db.collection('users').findOneAndUpdate(
            { _id: new ObjectId(req.params.id) },
            { $set: { ...req.body } },
            { returnDocument: 'after' }
        );
        res.status(200).json(updatedUser.value);
    } catch (error) {
        next(error);
    }
};

// Menghapus pengguna
export const deleteUser = async (req, res, next) => {
    try {
        await db.collection('users').deleteOne({ _id: new ObjectId(req.params.id) });
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        next(error);
    }
};
