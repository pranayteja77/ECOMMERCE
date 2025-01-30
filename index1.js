// server.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 5000;

mongoose.connect('mongodb://localhost/ecommerce', { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/products', (req, res) => {
  res.json([/* mock products */]);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
