const express = require('express');
const app = express();
const PORT = 3000;

// Simple test route
app.get('/', (req, res) => {
  res.send('Backend is working!');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
