const { model, Schema } = require('mongoose');

const  ExamenSchema = Schema(
    {
        descripcion:{
            type: String,
            required: [ true, 'La descripcion es obligatoria'],
        },
        indicaciones:{
            type: String,
            required: [ true, 'La indicacion es obligatoria'],
        },
        resultados:{
            type: String,
            required: [ true, 'La resultado es obligatoria'],

        }

    }
);

module.exports = model('Examen', ExamenSchema );