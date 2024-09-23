// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Ruta para procesar cédulas
app.post('/process-cedulas', (req, res) => {
  const { cedulas } = req.body;
  if (!cedulas) {
    return res.status(400).json({ error: 'Cédulas no proporcionadas' });
  }

  // Aquí puedes añadir lógica para procesar las cédulas.
  console.log('Cédulas recibidas:', cedulas);

  res.json({ success: true, message: 'Cédulas procesadas correctamente' });
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
