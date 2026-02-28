const mongoose = require('mongoose');

let cachedConnection = null;

const connectDB = async () => {
    if (cachedConnection) {
        return cachedConnection;
    }

    try {
        const uri = process.env.MONGODB_URI;
        if (!uri) {
            throw new Error('MONGODB_URI is not defined in environment variables');
        }
        const conn = await mongoose.connect(uri);
        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
        cachedConnection = conn;
        return conn;
    } catch (error) {
        console.error(`❌ MongoDB Connection Error: ${error.message}`);
        throw error;
    }
};

module.exports = connectDB;
