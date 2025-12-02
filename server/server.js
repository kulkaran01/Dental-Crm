const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const ROOT_DIR = path.join(__dirname, '..');
const DATA_FILE = path.join(ROOT_DIR, 'data.json');

const server = http.createServer((req, res) => {
    // API endpoint for getting clinics
    if (req.url === '/api/clinics' && req.method === 'GET') {
        console.log('Reading data from:', DATA_FILE);
        fs.readFile(DATA_FILE, 'utf8', (err, data) => {
            if (err) {
                // If the file doesn't exist, return an empty array
                if (err.code === 'ENOENT') {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify([]));
                    return;
                }
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Error reading data file.' }));
                return;
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(data);
        });
    }
    // API endpoint for saving clinics
    else if (req.url === '/api/clinics' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            fs.writeFile(DATA_FILE, body, 'utf8', (err) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ message: 'Error writing data file.' }));
                    return;
                }
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Data saved successfully.' }));
            });
        });
    }
    // Static file serving
    else {
        let filePath = '.' + req.url;
        if (filePath === './') {
            filePath = './index.html';
        }

        const extname = String(path.extname(filePath)).toLowerCase();
        const mimeTypes = {
            '.html': 'text/html',
            '.js': 'text/javascript',
            '.css': 'text/css',
        };

        const contentType = mimeTypes[extname] || 'application/octet-stream';
        const fullPath = path.join(ROOT_DIR, filePath);

        fs.readFile(fullPath, (err, content) => {
            if (err) {
                if (err.code === 'ENOENT') {
                    res.writeHead(404);
                    res.end('404 Not Found');
                } else {
                    res.writeHead(500);
                    res.end('Server Error');
                }
            } else {
                res.writeHead(200, { 'Content-Type': contentType });
                res.end(content, 'utf-8');
            }
        });
    }
});

server.listen(PORT, () => {
    console.log(`CRM server running at http://localhost:${PORT}/`);
    console.log('This window must remain open for the CRM to work.');
    console.log('You can now open your browser to the address above.');
});
