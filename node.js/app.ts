import http, { IncomingMessage, ServerResponse } from 'http';

const server = http.createServer((req: IncomingMessage, res: ServerResponse): void => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('Hello World!');
});

server.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});
