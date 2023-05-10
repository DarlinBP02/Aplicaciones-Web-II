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


  // Definir lista de tipos de examen
  let tiposExamen = [];
  
  // Obtener lista de tipos de examen
  app.get('/tipos-examen', (req, res) => {
    res.send(tiposExamen);
  });
  
  // Obtener tipo de examen por ID
  app.get('/tipos-examen/:id', (req, res) => {
    const tipoExamen = tiposExamen.find(te => te.id === parseInt(req.params.id));
    if (!tipoExamen) return res.status(404).send('Tipo de examen no encontrado.');
  
    res.send(tipoExamen);
  });
  
  // Crear nuevo tipo de examen
  app.post('/tipos-examen', (req, res) => {
    const tipoExamen = {
      id: tiposExamen.length + 1,
      descripcion: req.body.descripcion,
      indicaciones: req.body.indicaciones
    };
    tiposExamen.push(tipoExamen);
  
    res.send(tipoExamen);
  });
  
  // Actualizar tipo de examen por ID
  app.put('/tipos-examen/:id', (req, res) => {
    const tipoExamen = tiposExamen.find(te => te.id === parseInt(req.params.id));
    if (!tipoExamen) return res.status(404).send('Tipo de examen no encontrado.');
  
    tipoExamen.descripcion = req.body.descripcion;
    tipoExamen.indicaciones = req.body.indicaciones;
  
    res.send(tipoExamen);
  });
  
  // Actualizar parcialmente tipo de examen por ID
  app.patch('/tipos-examen/:id', (req, res) => {
    const tipoExamen = tiposExamen.find(te => te.id === parseInt(req.params.id));
    if (!tipoExamen) return res.status(404).send('Tipo de examen no encontrado.');
  
    if (req.body.descripcion) {
      tipoExamen.descripcion = req.body.descripcion;
    }
    if (req.body.indicaciones) {
      tipoExamen.indicaciones = req.body.indicaciones;
    }
  
    res.send(tipoExamen);
  });
  
  // Eliminar tipo de examen por ID
  app.delete('/tipos-examen/:id', (req, res) => {
    const tipoExamen = tiposExamen.find(te => te.id === parseInt(req.params.id));
    if (!tipoExamen) return res.status(404).send('Tipo de examen no encontrado.');
  
    const index = tiposExamen.indexOf(tipoExamen);
    tiposExamen.splice(index, 1);
  
    res.send(`El tipo de examen con ID ${req.params.id} ha sido eliminado.`);
  });
  
  // Definir lista de resultados
let resultados = [];

// Obtener lista de resultados
app.get('/resultados', (req, res) => {
  res.send(resultados);
});

// Obtener resultado por ID
app.get('/resultados/:id', (req, res) => {
  const resultado = resultados.find(r => r.id === parseInt(req.params.id));
  if (!resultado) return res.status(404).send('Resultado no encontrado.');

  res.send(resultado);
});

// Crear nuevo resultado
app.post('/resultados', (req, res) => {
  const resultado = {
    id: resultados.length + 1,
    idPaciente: req.body.idPaciente,
    idTipoExamen: req.body.idTipoExamen,
    resultadoExamen: req.body.resultadoExamen,
    valorPagado: req.body.valorPagado,
    observaciones: req.body.observaciones
  };
  resultados.push(resultado);

  res.send(resultado);
});

// Actualizar resultado por ID
app.put('/resultados/:id', (req, res) => {
  const resultado = resultados.find(r => r.id === parseInt(req.params.id));
  if (!resultado) return res.status(404).send('Resultado no encontrado.');

  resultado.idPaciente = req.body.idPaciente;
  resultado.idTipoExamen = req.body.idTipoExamen;
  resultado.resultadoExamen = req.body.resultadoExamen;
  resultado.valorPagado = req.body.valorPagado;
  resultado.observaciones = req.body.observaciones;

  res.send(resultado);
});

// Actualizar parcialmente resultado por ID
app.patch('/resultados/:id', (req, res) => {
  const resultado = resultados.find(r => r.id === parseInt(req.params.id));
  if (!resultado) return res.status(404).send('Resultado no encontrado.');

  if (req.body.idPaciente) {
    resultado.idPaciente = req.body.idPaciente;
  }
  if (req.body.idTipoExamen) {
    resultado.idTipoExamen = req.body.idTipoExamen;
  }
  if (req.body.resultadoExamen) {
    resultado.resultadoExamen = req.body.resultadoExamen;
  }
  if (req.body.valorPagado) {
    resultado.valorPagado = req.body.valorPagado;
  }
  if (req.body.observaciones) {
    resultado.observaciones = req.body.observaciones;
  }

  res.send(resultado);
});

// Eliminar resultado por ID
app.delete('/resultados/:id', (req, res) => {
  const resultado = resultados.find(r => r.id === parseInt(req.params.id));
  if (!resultado) return res.status(404).send('Resultado no encontrado.');

  const index = resultados.indexOf(resultado);
  resultados.splice(index, 1);

  res.send(`El resultado con ID ${req.params.id} ha sido eliminado.`);
});



