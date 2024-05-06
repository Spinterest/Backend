require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER_LOCAL,
  password: process.env.DB_PASSWORD_LOCAL,
  host: process.env.DB_HOST_LOCAL,
  port: process.env.DB_PORT_LOCAL,
  database: process.env.DB_DATABASE_LOCAL,
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = {
  query: (text, params) => pool.query(text, params)
};