import mongoose from 'mongoose';

const db = process.env.MONGO_URI;
const connectDB = async () => {
    try {
        const conn = mongoose.connect(db, {});
        console.log(`MongoDB Connected : ${conn}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

export default connectDB;
