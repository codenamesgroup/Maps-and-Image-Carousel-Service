import express from 'express';

let app = express();


app.get('/', (req, res) => {
	res.send('Hello World');
});

let port =  process.env.port || 3000;
app.listen(port, () => {
	console.log(`listening at port ${port}`);
});