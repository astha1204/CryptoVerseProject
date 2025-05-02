import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/api/news', async (req, res) => {
  const { q = 'Cryptocurrency', pageSize = 10 } = req.query;
  const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(q)}&pageSize=${pageSize}&sortBy=publishedAt&language=en`;

  try {
    const response = await fetch(url, {
      headers: { 'X-Api-Key': process.env.NEWS_API_KEY }
    });
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
