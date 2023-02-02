import express from 'express';
const app = express();

const port = process.env.PORT || 5002;

app.use(express.json());
app.get("/api/", (req, res) => {
	return 'hw';
})

app.listen(port, ()=> {
	console.log(`Server has been started on port ${port}...`);
})