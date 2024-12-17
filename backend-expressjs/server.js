const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importa el middleware CORS
const cuidadRoutes = require('./src/routes/cuidadRoutes');
const { port } = require('./src/config/env');

const app = express();

// Configura CORS
app.use(cors());

app.use(bodyParser.json());
app.use('/api', cuidadRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
