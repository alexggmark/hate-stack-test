const express = require('express');
const app = express();

app.use(express.static('public'));  // Serve static files
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/data', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
