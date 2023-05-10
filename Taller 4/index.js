const express = require('express');
const app = express();

// Configurar middleware para procesar body de las peticiones en formato JSON
app.use(express.json());


// Iniciar el servidor
app.listen(3000, () => console.log('Servidor HTTP funcionando en el puerto 3000'));
// Definir lista de pacientes
let pacientes = [];
  
  // Obtener lista de pacientes
  app.get('/pacientes', (req, res) => {
    res.send(pacientes);
  });
  
  // Obtener paciente por ID
  app.get('/pacientes/:id', (req, res) => {
    const paciente = pacientes.find(p => p.id === parseInt(req.params.id));
    if (!paciente) return res.status(404).send('Paciente no encontrado.');
  
    res.send(paciente);
  });
  
  // Crear nuevo paciente
  app.post('/pacientes', (req, res) => {
    const paciente = {
      id: pacientes.length + 1,
      nombre: req.body.nombre,
      identificacion: req.body.identificacion,
      tipoExamenId: req.body.tipoExamenId
    };
    pacientes.push(paciente);
  
    res.send(paciente);
  });
  
  // Actualizar paciente por ID
  app.put('/pacientes/:id', (req, res) => {
    const paciente = pacientes.find(p => p.id === parseInt(req.params.id));
    if (!paciente) return res.status(404).send('Paciente no encontrado.');
  
    paciente.nombre = req.body.nombre;
    paciente.identificacion = req.body.identificacion;
    paciente.tipoExamenId = req.body.tipoExamenId;
  
    res.send(paciente);
  });
  
  // Eliminar paciente por ID
  app.delete('/pacientes/:id', (req, res) => {
    const paciente = pacientes.find(p => p.id === parseInt(req.params.id));
    if (!paciente) return res.status(404).send('Paciente no encontrado.');
  
    const index = pacientes.indexOf(paciente);
    pacientes.splice(index, 1);
  
    res.send(`El paciente con ID ${req.params.id} ha sido eliminado.`);
  });
 


