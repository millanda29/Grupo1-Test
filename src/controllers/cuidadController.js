const ciudadModel = require('../models/ciudadModel');

// Obtener todas las ciudades
const getAllCities = async (req, res) => {
    try {
        const cities = await ciudadModel.getAllCities();
        res.json(cities);
    } catch (err) {
        console.error('Error fetching cities:', err.message); // Log de error
        res.status(500).json({ error: 'Error fetching cities' });
    }
};

// Obtener una ciudad por ID
const getCityById = async (req, res) => {
    try {
        const city = await ciudadModel.getCityById(req.params.id);
        if (!city) {
            return res.status(404).json({ message: 'City not found' });
        }
        res.json(city);
    } catch (err) {
        console.error('Error fetching city by ID:', err.message); // Log de error
        res.status(500).json({ error: 'Error fetching city by ID' });
    }
};

// Crear una nueva ciudad
const createCity = async (req, res) => {
    try {
        const cityId = await ciudadModel.createCity(req.body);
        res.status(201).json({ id: cityId });
    } catch (err) {
        console.error('Error creating city:', err.message); // Log de error
        res.status(500).json({ error: 'Error creating city' });
    }
};

// Actualizar una ciudad
const updateCity = async (req, res) => {
    try {
        const updated = await ciudadModel.updateCity(req.params.id, req.body);
        if (updated) {
            res.json({ message: 'City updated successfully' });
        } else {
            res.status(404).json({ message: 'City not found' });
        }
    } catch (err) {
        console.error('Error updating city:', err.message); // Log de error
        res.status(500).json({ error: 'Error updating city' });
    }
};

// Eliminar una ciudad
const deleteCity = async (req, res) => {
    try {
        const deleted = await ciudadModel.deleteCity(req.params.id);
        if (deleted) {
            res.json({ message: 'City deleted successfully' });
        } else {
            res.status(404).json({ message: 'City not found' });
        }
    } catch (err) {
        console.error('Error deleting city:', err.message); // Log de error
        res.status(500).json({ error: 'Error deleting city' });
    }
};

module.exports = {
    getAllCities,
    getCityById,
    createCity,
    updateCity,
    deleteCity
};
