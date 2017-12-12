import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import Promise from 'bluebird';

import auth from './routes/auth';

dotenv.config();

const app = express();

app.use(bodyParser.json());
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URL, { useMongoClient:true});
//API
// app.post('/api/auth', (req, res)	=>{
// 	res.status(400).json({ errors: {global: "Invalid credentials"}});
// });
app.use('/api/auth', auth);

app.get('/*', (req, res)	=> {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(8081, ()=> console.log('Api running on localhost:8081'));