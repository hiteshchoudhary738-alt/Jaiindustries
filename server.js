import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { pool, initDB } from './db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Jai Industries Backend API is running' });
});

// POST /api/inquiries - Submit a new inquiry
app.post('/api/inquiries', async (req, res) => {
  try {
    const { name, phone, location, type, bill } = req.body;

    if (!name || !phone || !location || !type) {
      return res.status(400).json({
        success: false,
        error: 'Name, phone, location, and product type are required fields.',
      });
    }

    const insertQuery = `
      INSERT INTO inquiries (name, phone, location, type, bill)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;

    const result = await pool.query(insertQuery, [
      name.trim(),
      phone.trim(),
      location.trim(),
      type.trim(),
      bill ? bill.trim() : null,
    ]);

    console.log('New Inquiry Saved to PostgreSQL:', result.rows[0]);

    return res.status(201).json({
      success: true,
      message: 'Inquiry submitted successfully!',
      inquiry: result.rows[0],
    });
  } catch (err) {
    console.error('Error saving inquiry:', err);
    return res.status(500).json({
      success: false,
      error: 'Failed to save inquiry to database. Please check database connection.',
    });
  }
});

// GET /api/inquiries - Retrieve inquiries list (for admin/verification)
app.get('/api/inquiries', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM inquiries ORDER BY created_at DESC;'
    );
    return res.json({
      success: true,
      count: result.rowCount,
      inquiries: result.rows,
    });
  } catch (err) {
    console.error('Error fetching inquiries:', err);
    return res.status(500).json({
      success: false,
      error: 'Failed to fetch inquiries.',
    });
  }
});

// Initialize Database & Start Server
initDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Backend server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to initialize database server:', err);
  });
