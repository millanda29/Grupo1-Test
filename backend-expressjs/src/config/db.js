const { Pool } = require('pg');
const { dbConfig } = require('./env');

// Creamos el pool de conexiones para PostgreSQL
const pool = new Pool(dbConfig);

// Exportamos la conexión
module.exports = pool;
