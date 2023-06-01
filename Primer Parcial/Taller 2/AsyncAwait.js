//Usando Async/Await:

// importar los arreglos de pacientes y tipos de examen
const { pacientes, tiposExamen } = require("./Arreglos");

// función asincrónica para buscar y mostrar un paciente y su tipo de examen
async function buscarPaciente(id) {
  // buscar el paciente con el ID proporcionado
  const paciente = pacientes.find(p => p.ID === id);

  // si el paciente no existe, lanzar un error con mensaje de error
  if (!paciente) {
    throw new Error("El paciente no existe.");
  }

  // buscar el tipo de examen correspondiente al paciente
  const tipoExamen = tiposExamen.find(t => t.ID === paciente.TipoExamen.ID);

  // retornar los datos del paciente y su tipo de examen
  return {
    paciente: `${paciente.Nombre} (${paciente.Identificacion})`,
    tipoExamen: tipoExamen.Descripcion,
    indicaciones: tipoExamen.Indicaciones
  };
}

// llamar a la función buscarPaciente con Async/Await
async function mostrarDatosPaciente(id) {
  try {
    const datos = await buscarPaciente(id);
    console.log("Datos del paciente:");
    console.log(`Paciente: ${datos.paciente}`);
    console.log(`Tipo de examen: ${datos.tipoExamen}`);
    console.log(`Indicaciones: ${datos.indicaciones}`);
  } catch (error) {
    console.error(error);
  }
}

// llamar a la función mostrarDatosPaciente con Async/Await
mostrarDatosPaciente(5);
