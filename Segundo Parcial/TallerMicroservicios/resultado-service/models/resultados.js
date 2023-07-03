const { model, Schema } = require('mongoose');

const  ResultadosSchema = Schema(
    {
        pacientes:{
            type: String,
            required: [ true, 'El paciente es obligatoria'],
        },
        examen:{
            type: String,
            required: [ true, 'El examen es obligatoria'],
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