//Definir un objeto por cada entidad asignada

// Entidad Paciente
const paciente1 = {id: 1, nombre: "Juan Pérez", identificacion: "123456789", examenes: []};
const paciente2 = {id: 2, nombre: "María Gómez", identificacion: "987654321", examenes: []};
const paciente3 = {id: 3, nombre: "Pedro Martínez", identificacion: "456123789", examenes: []};
const paciente4 = {id: 4, nombre: "Ana García", identificacion: "321654987", examenes: []};
const paciente5 = {id: 5, nombre: "Carlos Rodríguez", identificacion: "789123456", examenes: []};

// Entidad TipoExamen
const tipoExamen1 = {id: 1, descripcion: "Examen de sangre", indicaciones: "12 horas de ayuno", resultados: []};
const tipoExamen2 = {id: 2, descripcion: "Radiografía de tórax", indicaciones: "Respirar profundamente", resultados: []};
const tipoExamen3 = {id: 3, descripcion: "Electrocardiograma", indicaciones: "Estar relajado", resultados: []};
const tipoExamen4 = {id: 4, descripcion: "Mamografía", indicaciones: "No usar desodorante", resultados: []};
const tipoExamen5 = {id: 5, descripcion: "Colonoscopía", indicaciones: "Dieta líquida el día anterior", resultados: []};

// Entidad ResultadoExamen
const resultadoExamen1 = {id: 1, paciente: paciente1, tipoExamen: tipoExamen1, resultado: "Negativo", valorPagado: 200, observaciones: "Ninguna"};
const resultadoExamen2 = {id: 2, paciente: paciente2, tipoExamen: tipoExamen2, resultado: "Normal", valorPagado: 350, observaciones: "Alguna inflamación en el pulmón derecho"};
const resultadoExamen3 = {id: 3, paciente: paciente3, tipoExamen: tipoExamen3, resultado: "Normal", valorPagado: 400, observaciones: "Se observa una arritmia leve"};
const resultadoExamen4 = {id: 4, paciente: paciente4, tipoExamen: tipoExamen4, resultado: "Anormal", valorPagado: 450, observaciones: "Se observa una masa en la mama izquierda"};
const resultadoExamen5 = {id: 5, paciente: paciente5, tipoExamen: tipoExamen5, resultado: "Negativo", valorPagado: 550, observaciones: "Ninguna"};

// Exportar entidades
module.exports = {
  Paciente: {paciente1, paciente2, paciente3, paciente4, paciente5},
  TipoExamen: {tipoExamen1, tipoExamen2, tipoExamen3, tipoExamen4, tipoExamen5},
  ResultadoExamen: {resultadoExamen1, resultadoExamen2, resultadoExamen3, resultadoExamen4, resultadoExamen5}
};