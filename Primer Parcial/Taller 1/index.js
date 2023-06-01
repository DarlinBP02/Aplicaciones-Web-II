//Recorrer y mostrar elementos de todos los arreglos de objetos aplicando 3 instrucciones de repetición distintas
const { Pacientes, TiposExamen, ResultadosExamen } = require('./arreglos');

// Recorrido con for
console.log('Recorrido con for');
for (let i = 0; i < Pacientes.length; i++) {
  console.log(Pacientes[i]);
}

for (let i = 0; i < TiposExamen.length; i++) {
  console.log(TiposExamen[i]);
}

for (let i = 0; i < ResultadosExamen.length; i++) {
  console.log(ResultadosExamen[i]);
}

// Recorrido con forEach
console.log('Recorrido con forEach');
Pacientes.forEach(paciente => {
  console.log(paciente);
});

TiposExamen.forEach(tipoExamen => {
  console.log(tipoExamen);
});

ResultadosExamen.forEach(resultadoExamen => {
  console.log(resultadoExamen);
});

// Recorrido con map
console.log('Recorrido con map');
const pacientesNombres = Pacientes.map(paciente => paciente.nombre);
console.log(pacientesNombres);

const tiposExamenDescripciones = TiposExamen.map(tipoExamen => tipoExamen.descripcion);
console.log(tiposExamenDescripciones);

const resultadosExamenesResultados = ResultadosExamen.map(resultadoExamen => resultadoExamen.resultado);
console.log(resultadosExamenesResultados);