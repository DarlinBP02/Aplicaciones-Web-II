const { model, Schema } = require('mongoose');

const  PapeleraSchema = Schema(
    {
        entidad: {
            type: String,
            required: true,
          },
          datos: {
            type: Schema.Types.Mixed,
            required: true,
          },
    }
);

module.exports = model('Papelera', PapeleraSchema );