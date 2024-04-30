const { Pool } = require('pg');

const pool = new Pool({
  user: '<user>', 
  password: '<password>', 
  host: 'localhost', 
  port: 5432, // default Postgres port
  database: '<dbName>'
});

module.exports = {
  query: (text, params) => pool.query(text, params)
};