/*función que busca y muestra uno de todos los elementos del arreglo de objetos 
transaccionales y los datos de su entidad relacionada*/

// importar los arreglos de pacientes y tipos de examen
const { pacientes, tiposExamen } = require("./Arreglos");

// función para buscar y mostrar un paciente y su tipo de examen
function buscarPaciente(id) {
  // buscar el paciente con el ID proporcionado
  const paciente = pacientes.find(p => p.ID === id);

  // si el paciente no existe, mostrar mensaje de error
  if (!paciente) {
    console.log("El paciente no existe.");
    return;
  }

  // buscar el tipo de examen correspondiente al paciente
  const tipoExamen = tiposExamen.find(t => t.ID === paciente.TipoExamen.ID);

  // mostrar los datos del paciente y su tipo de examen
  console.log(`Paciente: ${paciente.Nombre} (${paciente.Identificacion})`);
  console.log(`Tipo de examen: ${tipoExamen.Descripcion}`);
  console.log(`Indicaciones: ${tipoExamen.Indicaciones}`);
}

// buscar y mostrar el paciente con ID 3
buscarPaciente(3);
