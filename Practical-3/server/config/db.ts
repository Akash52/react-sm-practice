import mongoose from 'mongoose';

const db =
    'mongodb+srv://Akash52:Dh4CnGjdIH0fsk2x@clusterrest.w3atu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

console.log(db);

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(db, {});
        console.log(`MongoDB Connected : ${conn}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

export default connectDB;
