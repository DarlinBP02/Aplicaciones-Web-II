//Luego crear arreglos que por cada entidad almacenen por lo menos 5 objetos.

//Arreglo de Paciente
const Paciente = [
    {
        id: 1,
        Nombre: 'Luis Garcia',
        Tsangre:'+O',
        Identificacion: '1302563215'
    },
    {
        id: 2,
        Nombre: 'Maria Castro',
        Tsangre:'-A',
        Identificacion: '1315686528'
    },
    {
        id: 3,
        Nombre: 'Mario Gomez',
        Tsangre:'+A',
        Identificacion: '1315686527'
    },
    {
        id: 4,
        Nombre: 'Natalia Zambrano',
        Tsangre:'-O',
        Identificacion: '1315686510'
    },
    {
        id: 5,
        Nombre: 'Tomas Fernandez',
        Tsangre:'-B',
        Identificacion: '1315686523'
    },
]
//Arreglo de tipo de examen
const TipoExamen =[
    {
        id: 1,
        Descripcion: 'Prueba Covid',
        Indicaciones: 'Prueba covid de sangre'
    },
    {
        id: 2,
        Descripcion: 'Examen de sangre',
        Indicaciones: '12 horas de ayuno'
    },
    {
        id: 3,
        Descripcion: 'Electrocardiograma',
        Indicaciones: 'Estar relajado'
    },
    {
        id: 4,
        Descripcion: 'Radiografía de tórax',
        Indicaciones: 'Respirar profundamente'
    },
    {
        id: 5,
        Descripcion: 'Colonoscopía',
        Indicaciones: 'Dieta líquida el día anterior'
    },
]

//Arreglos de Resultados
const Resultado = [
    {
        id: 1,
        idPacienete: 1,
        idTipoExamen: 1,
        ResultadoExamen: 'Positivo',
        ValorPagado: 20,
        Observaciones: 'Usar las medidas de bioseguridad'
    },
    {
        id: 2,
        idPacienete: 2,
        idTipoExamen: 2,
        ResultadoExamen: 'Negativo',
        ValorPagado: 30,
        Observaciones: 'Ninguna'
    },
    {
        id: 3,
        idPacienete: 3,
        idTipoExamen: 3,
        ResultadoExamen: 'Normal',
        ValorPagado: 25,
        Observaciones: 'Se observa una arritmia leve '
    },
    {
        id: 4,
        idPacienete: 4,
        idTipoExamen: 4,
        ResultadoExamen: 'Normal',
        ValorPagado: 50,
        Observaciones: 'Alguna inflamación en el pulmón derecho'
    },
    {
        id: 5,
        idPacienete: 5,
        idTipoExamen: 5,
        ResultadoExamen: 'Negativo',
        ValorPagado: 60,
        Observaciones: 'Ninguna'
    },
]

// Exportar arreglos
module.exports = { 
Paciente,
TipoExamen,
Resultado

}