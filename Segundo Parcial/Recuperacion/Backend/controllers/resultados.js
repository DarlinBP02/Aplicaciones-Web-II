const { response } = require('express');
const Resultados = require('../models/resultados');
const Papelera = require('../models/papelera');

const getResultados = async (req, res = response) => {
  try {
    // Utilizar populate para obtener los datos relacionados de Pacientes y Examen
    const resultados = await Resultados.find().populate('pacientes examen');
    return res.json({ resultados });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error al obtener los resultados' });
  }
};

const getResultado = async (req, res = response) => {
  try {
    const { id } = req.params;
    // Utilizar populate para obtener los datos relacionados de Pacientes y Examen
    const resultado = await Resultados.findById(id).populate('pacientes examen');
    if (!resultado) {
      return res.status(404).json({ error: 'Resultado no encontrado' });
    }
    return res.json(resultado);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error al obtener el resultado' });
  }
};

const createResultado = async (req = request, res = response) => {
  const { pacientes, examen, ResultadoExamen, ValorPagado, Observaciones } = req.body;
  try {
    const Resultadosave = new Resultados({
      pacientes,
      examen,
      ResultadoExamen,
      ValorPagado,
      Observaciones,
    });
    await Resultadosave.save();
    return res.status(201).json(Resultadosave);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error al crear el resultado' });
  }
};

const updateResultado = async (req, res = response) => {
  const { id } = req.params;
  const { ...data } = req.body;
  try {
    const updatedResultado = await Resultados.findByIdAndUpdate(id, data, { new: true });
    if (!updatedResultado) {
      return res.status(404).json({ error: 'Resultado no encontrado' });
    }
    return res.json(updatedResultado);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error al actualizar el resultado' });
  }
};


const deleteResultado = async (req, res = response) => {
  const { id } = req.params;
  try {
    const resultado = await Resultados.findById(id);
    if (!resultado) {
      return res.status(404).json({ error: 'Resultado no encontrado' });
    }

    const papeleraItem = new Papelera({
      entidad: 'Resultados',
      datos: resultado.toObject(),
    });

    await papeleraItem.save();

    await resultado.remove();

    return res.json(`Se ha eliminado el resultado y se ha movido a la Papelera`);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Se ha eliminado el resultado y se ha movido a la Papelera' });
  }
};






module.exports = {
  getResultados,
  getResultado,
  createResultado,
  updateResultado,
  deleteResultado,
};

