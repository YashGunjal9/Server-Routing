const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
    // Set the response header
    res.setHeader('Content-Type', 'text/plain');

    if (req.url === '/' && req.method === 'GET') {
        res.statusCode = 200;
        res.end('Welcome to the Home Page');
    }
    else if (req.url === '/about' && req.method === 'GET') {
        res.statusCode = 200;
        res.end('Welcome to the About Page');
    }
    else if (req.url === '/contact' && req.method === 'GET') {
        res.statusCode = 200;
        res.end('Contact us at: support@astretech.com');
    }
    else {
        res.statusCode = 404;
        res.end('404-Page not found');
    }
});

// Default port to listen on
const PORT = 5000;

// Start the server and listen on the specified port
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('Press Ctrl+C to stop the server');
});