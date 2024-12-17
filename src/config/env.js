require('dotenv').config();

module.exports = {
    dbConfig: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT || 5432, // Si no se especifica, usará el puerto 5432 por defecto
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    },
    port: process.env.PORT || 5000
};
