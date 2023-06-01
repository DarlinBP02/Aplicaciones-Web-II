
    const mongoose = require('mongoose');

    // Conexión a la base de datos en la nube
    const MongoUrl = "mongodb+srv://darlinbravo02:darlinbravo02@cluster0.6hrlfnb.mongodb.net/test";
    mongoose.connect(MongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => console.log('Conexión exitosa a MongoDB Atlas'))
      .catch((error) => console.log(`Error de conexión a MongoDB Atlas: ${error}`));
      
      // Definición de los modelos
      const pacienteSchema = new mongoose.Schema({
        nombre: { type: String, required: true },
        identificacion: { type: String, required: true },
        tipoExamen: { type: mongoose.Schema.Types.ObjectId, ref: 'TipoExamen' }
      });
      
      const tipoExamenSchema = new mongoose.Schema({
        descripcion: { type: String, required: true },
        indicaciones: { type: String, required: true }
      });
      
      const resultadoSchema = new mongoose.Schema({
        paciente: { type: mongoose.Schema.Types.ObjectId, ref: 'Paciente', required: true },
        tipoExamen: { type: mongoose.Schema.Types.ObjectId, ref: 'TipoExamen', required: true },
        resultadoExamen: { type: String, required: true },
        valorPagado: { type: Number, required: true },
        observaciones: { type: String }
      });
      
      const Paciente = mongoose.model('Paciente', pacienteSchema);
      const TipoExamen = mongoose.model('TipoExamen', tipoExamenSchema);
      const Resultado = mongoose.model('Resultado', resultadoSchema);
      
      
      // Crear una instancia de paciente
      const paciente1 = new Paciente({
        nombre: 'Juan Pérez',
        identificacion: '1234567890'
      });
      
      // Crear una instancia de tipo de examen
      const tipoExamen1 = new TipoExamen({
        descripcion: 'Examen de sangre',
        indicaciones: '12 horas de ayuno previo'
      });
      
      // Crear una instancia de resultado
      const resultado1 = new Resultado({
        paciente: paciente1._id,
        tipoExamen: tipoExamen1._id,
        resultadoExamen: 'Positivo',
        valorPagado: 100,
        observaciones: 'El paciente necesita tratamiento'
      });
      
      
      // CRUD de entidades maestras
      
      // Crear un paciente en la base de datos
      Paciente.create(paciente1)
        .then(paciente => console.log('Paciente creado:', paciente))
        .catch(err => console.log('Error al crear el paciente:', err));
      
      // Crear un tipo de examen en la base de datos
      TipoExamen.create(tipoExamen1)
        .then(tipoExamen => console.log('Tipo de examen creado:', tipoExamen))
        .catch(err => console.log('Error al crear el tipo de examen:', err));
      
      
      // CRUD de entidad transaccional
      
      // Crear un resultado en la base de datos
      Resultado.create(resultado1)
        .then(resultado => console.log('Resultado creado:', resultado))
        .catch(err => console.log('Error al crear el resultado:', err));
      
      
      // Listar los datos registrados en las colecciones
      
      // Usando for in para listar pacientes
      console.log('Listado de pacientes:');
      Paciente.find().populate('tipoExamen')
        .then(pacientes => {
          for (const paciente of pacientes) {
            console.log(paciente);
          }
        })
        .catch(err => console.log('Error al listar pacientes:', err));
      
// Usando forEach para listar tipos de examen
console.log('Listado de tipos de examen:');
TipoExamen.find()
  .then(tiposExamen => {
    tiposExamen.forEach(tipoExamen => {
      console.log(tipoExamen);
    });
  })
  .catch(err => console.log('Error al listar tipos de examen:', err));

// Usando find y populate para listar resultados de exámenes
console.log('Listado de resultados de exámenes:');
Resultado.find().populate('paciente tipoExamen')
  .then(resultados => {
    resultados.forEach(resultado => {
      console.log(resultado);
    });
  })
  .catch(err => console.log('Error al listar resultados de exámenes:', err));


      