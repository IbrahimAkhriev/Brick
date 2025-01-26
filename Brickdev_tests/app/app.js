const express = require('express');
const os = require('os');

const app = express();
const port = 8000;

// Получаем значение переменной окружения
const author = process.env.AUTHOR || 'Unknown Author';
const uuid = process.env.UUID || 'Unknown UUID';

app.get('/hostname', (req, res) => {
    res.send(os.hostname());
});

app.get('/author', (req, res) => {
    res.send(author);
});

app.get('/id', (req, res) => {
    res.send(uuid);
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

