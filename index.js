import express from 'express';
import cors from 'cors';
import dbConfig from './dbConfig.js'
import user from './app/apis/user.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());



app.get('/ping', (req, res) => {
    res.send('Hello World');
})

user(app);

mongoose.set('debug', false);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
})
