const { model, Schema } = require('mongoose');

const ResultadosSchema = Schema({
    pacientes: {
      type: String,
      required: [true, 'El paciente es obligatorio'],
    },
    examen: {
      type: String,
      required: [true, 'El examen es obligatorio'],
    },
    ResultadoExamen: {
      type: String,
      required: [true, 'El resultado es obligatorio'],
    },
    ValorPagado: {
      type: Number,
      default: 0,
    },
    Observaciones: {
      type: String,
      required: [true, 'La observación es obligatoria'],
    },
  });
  
module.exports = model('Resultados', ResultadosSchema);
