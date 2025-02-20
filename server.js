const express = require('express');
const cors = require('cors');

const app = express();
// Allow CORS (adjust origin as needed)
app.use(cors());
// Parse JSON bodies
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Sample POST endpoint
app.post('/api/data', (req, res) => {
  // For example, simply echo the received JSON
  res.json({ received: req.body });æ
});

// Use process.env.PORT for Azure (default to 3000 locally)
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
