//Aplicar vínculos entre entidades con relaciones entre objetos (puede aplicar ID o integrar todo el objeto).

const { Pacientes, TiposExamen, ResultadosExamen } = require('./arreglos');

// Vínculos Paciente - ResultadoExamen
Pacientes.forEach(paciente => {
  paciente.examenes = ResultadosExamen.filter(resultado => resultado.paciente.id === paciente.id);
});

// Vínculos TipoExamen - ResultadoExamen
TiposExamen.forEach(tipoExamen => {
  tipoExamen.resultados = ResultadosExamen.filter(resultado => resultado.tipoExamen.id === tipoExamen.id);
});

// Exportar arreglos actualizados
module.exports = {
  Pacientes: Pacientes,
  TiposExamen: TiposExamen,
  ResultadosExamen: ResultadosExamen
};