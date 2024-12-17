const db = require('../config/db'); // Usamos el pool de conexiones a PostgreSQL

// Obtener todas las ciudades
const getAllCities = async () => {
    try {
        const result = await db.query('SELECT * FROM ciudades');
        return result.rows; // PostgreSQL devuelve los resultados en result.rows
    } catch (err) {
        throw new Error('Error fetching cities: ' + err.message);
    }
};

// Obtener una ciudad por ID
const getCityById = async (id) => {
    try {
        const result = await db.query('SELECT * FROM ciudades WHERE id = $1', [id]); // Usamos $1 como placeholder para la variable
        return result.rows[0]; // Devuelve el primer elemento de los resultados
    } catch (err) {
        throw new Error('Error fetching city by ID: ' + err.message);
    }
};

// Crear una nueva ciudad
const createCity = async (city) => {
    const { nombre, pais, poblacion, url_imagen } = city;
    try {
        const result = await db.query(
            'INSERT INTO ciudades (nombre, pais, poblacion, url_imagen) VALUES ($1, $2, $3, $4) RETURNING id',
            [nombre, pais, poblacion, url_imagen]
        );
        return result.rows[0].id; // Devuelve el ID de la ciudad recién creada
    } catch (err) {
        throw new Error('Error creating city: ' + err.message);
    }
};

// Actualizar los datos de una ciudad
const updateCity = async (id, city) => {
    const { nombre, pais, poblacion, url_imagen } = city;
    try {
        const result = await db.query(
            'UPDATE ciudades SET nombre = $1, pais = $2, poblacion = $3, url_imagen = $4 WHERE id = $5',
            [nombre, pais, poblacion, url_imagen, id]
        );
        return result.rowCount > 0; // Si rowCount > 0, se actualizó correctamente
    } catch (err) {
        throw new Error('Error updating city: ' + err.message);
    }
};

// Eliminar una ciudad por ID
const deleteCity = async (id) => {
    try {
        const result = await db.query('DELETE FROM ciudades WHERE id = $1', [id]);
        return result.rowCount > 0; // Si rowCount > 0, se eliminó correctamente
    } catch (err) {
        throw new Error('Error deleting city: ' + err.message);
    }
};

module.exports = {
    getAllCities,
    getCityById,
    createCity,
    updateCity,
    deleteCity
};
