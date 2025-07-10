// server.cjs
const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();

// Allow requests only from your React app running at localhost:5174
app.use(cors({
  origin: 'http://localhost:5174'
}));

app.get('/recipes', async (req, res) => {
  const q = req.query.q || 'chicken';

  const YOUR_APP_ID = 'cdfc5849';  // <--- Replace with your actual app id
  const YOUR_APP_KEY = '49b12c8b98e8267c0c227399d2ea4be4';  // <--- Replace with your actual app key

  try {
    const edamamResponse = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${q}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`
    );

    if (!edamamResponse.ok) {
      return res.status(edamamResponse.status).json({ error: 'Error from Edamam API' });
    }

    const data = await edamamResponse.json();
    res.json(data);

  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Failed to fetch data from Edamam API' });
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
