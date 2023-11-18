import fs from 'fs';
import http2 from 'http2';

const server = http2.createSecureServer(
  {
    key: fs.readFileSync('./keys/server.key'),
    cert: fs.readFileSync('./keys/server.crt'),
  },
  (req, res) => {
    console.log(req.url);

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Hello world</h1>');
    res.end();
  }
);

server.listen(8080, () => {
  console.log('Server running on port 8080');
});
