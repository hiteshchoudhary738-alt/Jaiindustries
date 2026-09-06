import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool, Client } = pg;

const dbConfig = {
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432', 10),
};

const dbName = process.env.DB_NAME || 'jai_industries';

async function ensureDatabaseExists() {
  const rootClient = new Client({
    ...dbConfig,
    database: 'postgres',
  });

  try {
    await rootClient.connect();
    const res = await rootClient.query(
      `SELECT 1 FROM pg_database WHERE datname = $1`,
      [dbName]
    );
    if (res.rowCount === 0) {
      await rootClient.query(`CREATE DATABASE "${dbName}"`);
      console.log(`Database "${dbName}" created successfully.`);
    }
  } catch (err) {
    console.warn('Database existence check notice:', err.message);
  } finally {
    await rootClient.end().catch(() => {});
  }
}

export const pool = new Pool({
  ...dbConfig,
  database: dbName,
});

export async function initDB() {
  await ensureDatabaseExists();

  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS inquiries (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      phone VARCHAR(50) NOT NULL,
      location VARCHAR(255) NOT NULL,
      type VARCHAR(255) NOT NULL,
      bill VARCHAR(100),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  try {
    await pool.query(createTableQuery);
    console.log('PostgreSQL "inquiries" table ready.');
  } catch (err) {
    console.error('Error initializing "inquiries" table:', err.message);
    throw err;
  }
}
