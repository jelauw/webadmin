const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/admin', (req, res) => {
  // Logika penanganan permintaan di sini
  res.send('Ini adalah halaman admin');
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello, world!');
// });

// server.listen(3000, () => {
//   console.log('Server berjalan pada port 3000');
// });

