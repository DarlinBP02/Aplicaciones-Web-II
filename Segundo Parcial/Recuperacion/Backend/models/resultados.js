const { model, Schema } = require('mongoose');

const ResultadosSchema = Schema({
  pacientes: {
    type: Schema.Types.ObjectId,
    ref: 'Pacientes',
    required: [true, 'El paciente es obligatorio'],
  },
  examen: {
    type: Schema.Types.ObjectId,
    ref: 'Examen',
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
  eliminado: {
    type: Boolean,
    default: false,
  },
});

module.exports = model('Resultados', ResultadosSchema);