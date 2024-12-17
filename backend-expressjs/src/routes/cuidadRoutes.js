const express = require('express');
const router = express.Router();
const ciudadController = require('../controllers/cuidadController'); // Corregido el nombre del archivo controlador

// Rutas para manejar las ciudades
router.get('/ciudades', ciudadController.getAllCities); // Obtener todas las ciudades
router.get('/ciudades/:id', ciudadController.getCityById); // Obtener una ciudad por ID
router.post('/ciudades', ciudadController.createCity); // Crear una nueva ciudad
router.put('/ciudades/:id', ciudadController.updateCity); // Actualizar los datos de una ciudad
router.delete('/ciudades/:id', ciudadController.deleteCity); // Eliminar una ciudad por ID

module.exports = router;
