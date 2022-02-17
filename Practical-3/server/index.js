import express from 'express';
const app = express(); //Here we create app variable which store express Properties
import userRouters from './routes/users.js';

const PORT = process.env.PORT || 5000;

app.use(express.json()); //express to recognize the incoming Request Object as a JSON Object.
//This method is called as a middleware

//here we create our first GET request

app.get('/api', (req, res) => {
    res.send({name: 'Hello World.....'});

    console.log('Data Fetch Successfully');
});

//Here We use our all routes

app.use('/users', userRouters);

//Here We Create Simple Express Server

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});
