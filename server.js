// server.js
const express = require('express');
const next = require('next');
const dotenv = require('dotenv');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();

  // // Custom API endpoints
  // server.get('/api/users', (req, res) => {
  //   // Handle the API request
  //   res.json({ message: 'This is an API endpoint' });
  // });

  // Default Next.js handling
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
}).catch((ex) => {
  console.error(ex.stack);
  process.exit(1);
});