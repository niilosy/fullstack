const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');

    // Different routes
    if (req.url === '/') {
        res.statusCode = 200;
        res.end('Hello, World!');
    } else if (req.url === '/about') {
        res.statusCode = 200;
        res.end('About Page');
    } else if (req.url === '/contact') {
        res.statusCode = 200;
        res.end('Contact Page');
    } else {
        res.statusCode = 404;
        res.end('Page Not Found');
    }
});

// Listening on port 3000
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
