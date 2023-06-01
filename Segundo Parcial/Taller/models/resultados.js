const { model, Schema } = require('mongoose');

const  ResultadosSchema = Schema(
    {
        pacientes:{
            type: Schema.Types.ObjectId,
            ref:'Pacientes',
            required:false
        },
        examen:{
            type: Schema.Types.ObjectId,
            ref:'Examen',
            required:false
        },
        ResultadoExamen:{
            type: String,
            required: [ true, 'La resultado es obligatoria'],
        },
        ValorPagado:{
            type: Number,
            default:0
        },
        Observaciones:{
            type: String,
            required: [ true, 'La observacion es obligatoria'],
        }

    }
);

module.exports = model('Resultados', ResultadosSchema );