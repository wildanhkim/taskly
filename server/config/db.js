import { MongoClient, ServerApiVersion } from "mongodb";

// Mengambil nilai URI dan nama database dari environment variables
const { MONGODB_URI, MONGODB_DATABASE } = process.env;

const client = new MongoClient(MONGODB_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
});

// Fungsi untuk menghubungkan ke database
async function connectDB() {
    try {
        // Menghubungkan ke MongoDB
        await client.connect();
        // Mengecek koneksi dengan menjalankan perintah ping
        await client.db().command({ ping: 1 });
        console.log("Sukses Menghubungkan ke database");

    } catch (err) {
        console.error("Error saat menghubungkan ke database:", err);
    }
}

// Memanggil fungsi untuk menghubungkan ke database
connectDB();

// Mengekspor objek db untuk digunakan di tempat lain
export const db = client.db(MONGODB_DATABASE);
