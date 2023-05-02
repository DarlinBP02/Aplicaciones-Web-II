//Replicar esta solución aplicando 2 de estas estructuras: Callbacks, Promises y Async/Await.


//Usando Promises:

// importar los arreglos de pacientes y tipos de examen
const { pacientes, tiposExamen } = require("./Arreglos");

// función para buscar y mostrar un paciente y su tipo de examen
function buscarPaciente(id) {
  return new Promise((resolve, reject) => {
    // buscar el paciente con el ID proporcionado
    const paciente = pacientes.find(p => p.ID === id);

    // si el paciente no existe, rechazar la promesa con mensaje de error
    if (!paciente) {
      reject(new Error("El paciente no existe."));
      return;
    }

    // buscar el tipo de examen correspondiente al paciente
    const tipoExamen = tiposExamen.find(t => t.ID === paciente.TipoExamen.ID);

    // resolver la promesa con los datos del paciente y su tipo de examen
    resolve({
      paciente: `${paciente.Nombre} (${paciente.Identificacion})`,
      tipoExamen: tipoExamen.Descripcion,
      indicaciones: tipoExamen.Indicaciones
    });
  });
}

// llamar a la función buscarPaciente con Promises
buscarPaciente(4)
  .then(datos => {
    console.log("Datos del paciente:");
    console.log(`Paciente: ${datos.paciente}`);
    console.log(`Tipo de examen: ${datos.tipoExamen}`);
    console.log(`Indicaciones: ${datos.indicaciones}`);
  })
  .catch(error => console.error(error));
