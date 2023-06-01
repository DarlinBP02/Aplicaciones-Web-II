//Luego crear arreglos que por cada entidad almacenen por lo menos 5 objetos.

const { Paciente, TipoExamen, ResultadoExamen } = require('./entidades');

// Arreglo de pacientes
const pacientes = [Paciente.paciente1, Paciente.paciente2, Paciente.paciente3, Paciente.paciente4, Paciente.paciente5];

// Arreglo de tipos de examen
const tiposExamen = [TipoExamen.tipoExamen1, TipoExamen.tipoExamen2, TipoExamen.tipoExamen3, TipoExamen.tipoExamen4, TipoExamen.tipoExamen5];

// Arreglo de resultados de examen
const resultadosExamen = [ResultadoExamen.resultadoExamen1, ResultadoExamen.resultadoExamen2, ResultadoExamen.resultadoExamen3, ResultadoExamen.resultadoExamen4, ResultadoExamen.resultadoExamen5];

// Exportar arreglos
module.exports = {
  Pacientes: pacientes,
  TiposExamen: tiposExamen,
  ResultadosExamen: resultadosExamen
};