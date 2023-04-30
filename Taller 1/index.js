//Recorrer y mostrar elementos de todos los arreglos de objetos aplicando 3 instrucciones de repetición distintas
const { Paciente, TipoExamen, Resultado } = require('./arreglos')


//// Recorrido con While
const estructuraWhile = () =>{
    console.log('Recorrido con While');
    let iterador= 0
    console.log('Pacientes');
    while( iterador< Paciente.length){
        console.log(Paciente[iterador]);
        iterador++;
    }

    console.log('\nTipo de Examen');
    iterador= 0;
    while( iterador< TipoExamen.length){
        console.log(TipoExamen[iterador]);
        iterador++;
    }

    console.log('\nResultado de Examen');
    iterador= 0;
    while( iterador< Resultado.length){
        console.log(Resultado[iterador]);
        iterador++;
    }
}


//// Recorrido con for of
const estructuraForOf = () =>{
    console.log('Recorrido con For Of');
    console.log('Pacientes');
    for( let Pacientes of Paciente) console.log(Pacientes);

    console.log('\nTipo de Examen');
    for( let Tipos of TipoExamen) console.log(Tipos);

    console.log('\nResultado de Examen');
    for( let Resultados of Resultado) console.log(Resultados);
}


// Recorrido con for
const estructuraForLoop = () =>{
        console.log('Recorrido con for');
        console.log('Pacientes');
        for(let iterador = 0; iterador< Paciente.length; iterador++){
            console.log(Paciente[iterador]);
        }


        console.log('\nTipo de Examen');
        for(let iterador = 0; iterador< TipoExamen.length; iterador++){
            console.log(TipoExamen[iterador]);
        }
 

        console.log('\nResultado de Examen');
        for(let iterador = 0; iterador< Resultado.length; iterador++){
            console.log(Resultado[iterador]);
        };
}
estructuraWhile();
estructuraForOf();
estructuraForLoop();