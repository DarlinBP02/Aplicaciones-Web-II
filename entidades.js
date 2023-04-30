//Definir un objeto por cada entidad asignada

//Funcion para los objetos
const entityObjects = () =>{ 
//Entidades
    const Paciente = {
        id: 1,
        Nombre: 'Luis Garcia',
        Tsangre:'+O',
        Identificacion: '1302563215'
    }

    const TipoExamen ={
        id: 1,
        Descripcion: 'Prueba Covid',
        Indicaciones: 'Prueba covid con Hisopo'
    }

    const Resultado = {
        id: 1,
        idPacienete: 1,
        idTipoExamen: 1,
        ResultadoExamen: 'Negativo',
        ValorPagado: 40,
        Observaciones: 'Usar las medidas de bioseguridad'
    }

    console.log( Paciente );
    console.log( TipoExamen );
    console.log( Resultado );
}
entityObjects();