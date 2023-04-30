//Aplicar vínculos entre entidades con relaciones entre objetos (puede aplicar ID o integrar todo el objeto).

const entityObjects = () =>{ 

    const Paciente = {
        id: 1,
        Nombre: 'Luis Garcia',
        Tsangre:'+O',
        Identificacion: '1302563215'
    }

// Vínculos Tipo de examen - Paciente
    const TipoExamen ={
        id: 1,
        Descripcion: 'Prueba Covid',
        Indicaciones: 'Prueba covid con Hisopo',
        idPaciente:1
    }

    const Resultado = {
        id: 1,
        idPacienete: 1,
        idTipoExamen: 1,
        ResultadoExamen: 'Positivo',
        ValorPagado: 20,
        Observaciones: 'Usar las medidas de bioseguridad'
    }

    console.log( Paciente );
    console.log( TipoExamen );
    console.log( Resultado );
}
entityObjects();