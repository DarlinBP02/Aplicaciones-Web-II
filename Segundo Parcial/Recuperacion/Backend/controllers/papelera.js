const { response } = require('express');
const Papelera = require('../models/papelera');
const Resultados = require('../models/resultados');

const getPapelera = async (req, res = response) => {
  try {
    const registrosPapelera = await Papelera.find();
    return res.json({ registrosPapelera });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error al obtener los datos de la Papelera' });
  }
};
const restoreData = async (req, res = response) => {
    const { id } = req.params;
    try {
      // Consultar el registro de la entidad Papelera por su ID
      const papeleraItem = await Papelera.findById(id);
      if (!papeleraItem) {
        return res.status(404).json({ error: 'Registro no encontrado en la Papelera' });
      }
        const resultadoRestaurado = new Resultados(papeleraItem.datos);
  
      await resultadoRestaurado.save();
  
      await papeleraItem.remove();
  
      return res.json('Registro restaurado y movido a la entidad Resultados');
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error al restaurar el registro' });
    }
  };

module.exports = {
  getPapelera,
  restoreData
};