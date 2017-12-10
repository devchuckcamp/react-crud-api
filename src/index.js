import express from 'express';
import path from 'path';

const app = express();

//API
app.post('/api/auth', (req, res)	=>{
	res.status(200).json({ errors: {global: "Invalid credentials"}});
});

app.get('/*', (req, res)	=> {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(8081, ()=> console.log('Api running on localhost:8081'));