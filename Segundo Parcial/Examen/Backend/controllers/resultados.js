const { response } = require('express');
const Resultados = require('../models/resultados');

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
    const deletedResultado = await Resultados.findByIdAndUpdate(id, { eliminado: true }, { new: true });
    if (!deletedResultado) {
      return res.status(404).json({ error: 'Resultado no encontrado' });
    }
    return res.json(`Se ha eliminado el resultado`);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error al eliminar el resultado' });
  }
};

const getResultadosActivos = async (req, res = response) => {
  try {
    const resultadosActivos = await Resultados.find({ eliminado: false }).populate('pacientes examen');
    return res.json({ resultados: resultadosActivos });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error al obtener los resultados activos' });
  }
};

const getResultadosEliminados = async (req, res = response) => {
  try {
    const resultadosEliminados = await Resultados.find({ eliminado: true }).populate('pacientes examen');
    return res.json({ resultados: resultadosEliminados });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error al obtener los resultados eliminados' });
  }
};

const getResultadosAmbos = async (req, res = response) => {
  try {
    const resultadosAmbos = await Resultados.find().populate('pacientes examen');
    return res.json({ resultados: resultadosAmbos });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error al obtener todos los resultados' });
  }
};
const restoreResultado = async (req, res = response) => {
  const { id } = req.params;
  try {
    // Encuentra el resultado por su ID y actualiza el campo 'eliminado' a false para restaurarlo
    const restoredResultado = await Resultados.findByIdAndUpdate(id, { eliminado: false }, { new: true });

    if (!restoredResultado) {
      return res.status(404).json({ error: 'Resultado no encontrado' });
    }

    return res.json(restoredResultado);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error al restaurar el resultado' });
  }
};

module.exports = {
  getResultados,
  getResultado,
  createResultado,
  updateResultado,
  deleteResultado,
  getResultadosActivos,
  getResultadosEliminados,
  getResultadosAmbos,
  restoreResultado,
};

