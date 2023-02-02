import express from 'express';
import path from 'path';

const __dirname = path.resolve();
const PORT = 3000;
const app = express();

// app.use(express.static(path.resolve(__dirname, 'static'))); // - Хранение всей статики на серваке, чтоб сервак её понимал

app.get('/', (req, res) => {
	res.send('<h2>Api is running!</h2>');
	// res.sendFile(path.resolve(__dirname, 'static', 'index.html'))
})

app.get('/api/server', (req, res) => {
	res.json({test: 42});
})

app.listen(PORT, () => {
	console.log(`Server has been started on port ${PORT}...`)
});