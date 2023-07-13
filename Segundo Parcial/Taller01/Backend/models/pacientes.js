const { model, Schema } = require('mongoose');

const  PacienteSchema = Schema(
    {
        Nombre:{
            type: String,
            required: [ true, 'El paciente es obligatoria'],
        },
        Identificacion:{
            type: Number,
            default:0
        },

    }
);

module.exports = model('Pacientes', PacienteSchema );