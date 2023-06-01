//1.Definir dos arreglos que almacenen por lo menos cinco objetos con las entidades Paciente con sus atributos: ID, 
//Nombre, Identificación y Tipo de Examen con sus atributos: ID, Descripción, Indicaciones.

// arreglo de pacientes
const pacientes = [
    {
      ID: 1,
      Nombre: "Juan Gomez",
      Identificacion: "123456789",
      TipoExamen: {
        ID: 1,
        Descripcion: "Hemograma",
        Indicaciones: "12 horas de ayuno previo"
      }
    },
    {
      ID: 2,
      Nombre: "Maria Perez",
      Identificacion: "123456789",
      TipoExamen: {
        ID: 1,
        Descripcion: "Hemograma",
        Indicaciones: "12 horas de ayuno previo"
      }
    },
    {
      ID: 3,
      Nombre: "Pedro Rodriguez",
      Identificacion: "456123789",
      TipoExamen: {
        ID: 3,
        Descripcion: "Electrocardiograma",
        Indicaciones: "No ingerir bebidas estimulantes"
      }
    },
    {
      ID: 4,
      Nombre: "Ana Perez",
      Identificacion: "789456123",
      TipoExamen: {
        ID: 2,
        Descripcion: "Radiografía de tórax",
        Indicaciones: "No usar joyas ni objetos metálicos"
      }
    },
    {
      ID: 5,
      Nombre: "Jorge Garcia",
      Identificacion: "321789456",
      TipoExamen: {
        ID: 2,
        Descripcion: "Radiografía de tórax",
        Indicaciones: "No usar joyas ni objetos metálicos"
      }
    }
  ];
  
  // arreglo de tipos de examen
  const tiposExamen = [
    {
      ID: 1,
      Descripcion: "Hemograma",
      Indicaciones: "12 horas de ayuno previo"
    },
    {
      ID: 2,
      Descripcion: "Radiografía de tórax",
      Indicaciones: "No usar joyas ni objetos metálicos"
    },
    {
      ID: 3,
      Descripcion: "Electrocardiograma",
      Indicaciones: "No ingerir bebidas estimulantes"
    },
    {
      ID: 4,
      Descripcion: "Tomografía computarizada",
      Indicaciones: "Ingerir mucho líquido antes del examen"
    },
    {
      ID: 5,
      Descripcion: "Resonancia magnética",
      Indicaciones: "No llevar objetos metálicos"
    }
  ];
  
  // exportar los arreglos
  module.exports = { pacientes, tiposExamen };
  