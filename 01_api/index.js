require('dotenv').config();
const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// ---- Correct Database Configuration ----
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'db',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.DB_NAME || 'movies',
  port: Number(process.env.DB_PORT || 3306),
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// ---- Health Check ----
app.get('/health', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT 1 AS ok');
    res.json({ status: 'ok', db: rows[0].ok === 1 });
  } catch (e) {
    console.error('Health Error:', e);
    res.status(500).json({ status: 'error', message: e.message });
  }
});

// ---- Movies API ----
app.get('/movies', async (req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT id, title, year, genre, poster, summary FROM movies ORDER BY id'
    );
    res.json(rows);
  } catch (e) {
    console.error('Movies Error:', e);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// ---- Start Server ----
const port = Number(process.env.PORT || 3001);
app.listen(port, () => console.log(`API listening on http://0.0.0.0:${port}`));
