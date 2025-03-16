const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Middleware to log request method and URL
const requestLogger = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
};

// Check for the X-Custom-Header
const customHeaderChecker = (req, res, next) => {
    if (!req.headers['x-custom-header']) {
        return res.status(400).json({ error: 'X-Custom-Header is missing' });
    }
    next();
};

// Middleware
app.use(requestLogger);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.send('Hello, World!'));
app.get('/about', (req, res) => res.send('About Page'));
app.get('/contact', (req, res) => res.send('Contact Page'));
app.get('/services', (req, res) => res.send('Services Page'));

app.get('/list', (req, res) => {
    fs.readFile('data/list.txt', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading file');
        }
        res.send(`<pre>${data}</pre>`);
    });
});

// Route: JSON read
app.get('/json', (req, res) => {
    fs.readFile('data/users.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading file');
        }

        const users = JSON.parse(data);
        let table = `
            <table border="1" cellpadding="10">
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                </tr>
        `;
        users.forEach(user => {
            table += `
                <tr>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.age}</td>
                </tr>
            `;
        });
        table += `</table>`;
        res.send(table);
    });
});

app.post('/submit', (req, res) => {
    const requestData = req.body;
    res.json({ message: 'Data received successfully!', data: requestData });
});

app.post('/secure-submit', customHeaderChecker, (req, res) => {
    res.json({ message: 'Secure data received!', data: req.body });
});

// Route JSON add
app.post('/add', (req, res) => {
    const { name, email, age } = req.body;

    if (!name || !email || !age) {
        return res.status(400).json({ error: "All fields (name, email, age) are required" });
    }

    fs.readFile('data/users.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Error reading file" });
        }

        let users = JSON.parse(data);
        users.push({ name, email, age });

        fs.writeFile('data/users.json', JSON.stringify(users, null, 4), err => {
            if (err) {
                return res.status(500).json({ error: "Error writing file" });
            }
            res.json({ message: "User added successfully", users });
        });
    });
});

// Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
