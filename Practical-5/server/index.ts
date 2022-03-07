import express, {json, urlencoded} from 'express';
import connectDB from './config/db';
import * as dotenv from 'dotenv';
const app = express();
import todoRoutes from './routes/todoRoutes';
import cors from 'cors';
dotenv.config();
app.use(cors());
app.use(json());
app.use(urlencoded({extended: false}));

//Here We use our all routes

app.use('/api/v1/todo', todoRoutes);

//Connect to database
connectDB();

//Here We Create Simple Express Server

const PORT: string | number = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(
        `App listening on port ${PORT} ! & Mode ${process.env.NODE_ENV}`,
    );
});
