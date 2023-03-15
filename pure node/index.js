const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    if (req.url === '/raw-html') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end('<h1>Welcome</h1>');
    } else if (req.url === '/users') {
      fs.readFile('users.json', (err, data) => {
        if (err) {
          res.writeHead(500);
          res.end(err.message);
        } else {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(data);
        }
      });
    } else if (req.url === '/') {
      fs.readFile('index.html', (err, data) => {
        if (err) {
          res.writeHead(500);
          res.end(err.message);
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(data);
        }
      });
    } else {
      res.writeHead(404);
      res.end('Not Found');
    }
  } else {
    res.writeHead(405);
    res.end('Method Not Allowed');
  }
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
